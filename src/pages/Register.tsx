
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, Send } from "lucide-react";
import { useUserStore } from "../stores/userStore";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Password validation schema
const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setUserData } = useUserStore();
  const [searchParams] = useSearchParams();
  const [referralCode, setReferralCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    enteredReferralCode: "",
  });

  useEffect(() => {
    // Only use URL parameter for referral code
    const refCode = searchParams.get('ref');
    
    if (refCode) {
      const upperRefCode = refCode.trim().toUpperCase();
      setReferralCode(upperRefCode);
      setFormData((prev) => ({ ...prev, enteredReferralCode: upperRefCode }));
      toast({
        title: "Referral Code Applied!",
        description: `Using referral code: ${upperRefCode}`,
      });
    }
  }, [searchParams, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate password strength
      const passwordValidation = passwordSchema.safeParse(formData.password);
      if (!passwordValidation.success) {
        toast({
          title: "Weak Password",
          description: passwordValidation.error.errors[0].message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Sign up with Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
          },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (signUpError) throw signUpError;

      if (!authData.user) {
        throw new Error("Failed to create user account");
      }

      // Process referral code if provided
      const codeToUse = formData.enteredReferralCode.trim().toUpperCase();
      if (codeToUse) {
        const { error: referralError } = await supabase.rpc("process_referral", {
          referrer_code: codeToUse,
          new_user_id: authData.user.id,
        });

        if (referralError) {
          toast({
            title: "Registration Successful",
            description: "Account created, but referral code could not be applied.",
            variant: "default",
          });
        } else {
          toast({
            title: "Registration Successful!",
            description: `Welcome! Your referrer has been credited.`,
          });
        }
      } else {
        toast({
          title: "Registration Successful!",
          description: "Your account has been created.",
        });
      }

      // Store user data locally
      setUserData({
        fullName: formData.fullName,
        email: formData.email,
      });

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: "Unable to complete registration. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleHelpClick = () => {
    window.open("https://t.me/Officialbluepay", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="p-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <span 
          className="text-primary cursor-pointer text-sm font-medium" 
          onClick={handleHelpClick}
        >
          You Need Help?
        </span>
      </header>

      <div className="flex-1 flex flex-col justify-center px-6 pb-8">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-primary text-center tracking-wider">
            BLUEPAY
          </h1>
          <h2 className="text-2xl font-bold mb-2 text-foreground">Welcome!</h2>
          
          {referralCode && (
            <div className="bg-accent/20 border border-accent rounded-lg p-3 mb-4">
              <p className="text-accent text-sm">
                🎉 Referral code detected: <span className="font-bold">{referralCode}</span>
              </p>
              <p className="text-accent/80 text-xs">Your referrer will be credited when you register!</p>
            </div>
          )}
          
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            Get your account ready and instantly start buying, selling airtime and data online and start paying all your bills in cheaper price.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="fullName"
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="rounded-xl bg-input border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl bg-input border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-xl bg-input border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
              required
            />
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">+234</span>
              <Input
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="rounded-xl bg-input border-border pl-14 pr-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
                required
              />
            </div>

            <Input
              name="enteredReferralCode"
              placeholder="REFERRAL CODE (OPTIONAL)"
              value={formData.enteredReferralCode}
              onChange={handleChange}
              className="rounded-xl bg-input border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14 uppercase"
              maxLength={6}
            />

            <p className="text-xs text-muted-foreground">
              Any further actions indicates that you agree with our terms & conditions!
            </p>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 font-semibold rounded-xl h-14 text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <span className="text-muted-foreground text-sm">Already have an account? </span>
            <button 
              onClick={() => navigate("/pin")} 
              className="text-primary font-medium text-sm"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Floating chat button */}
      <button 
        onClick={handleHelpClick}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors"
      >
        <Send className="w-6 h-6 text-accent-foreground" />
      </button>
    </div>
  );
};

export default Register;
