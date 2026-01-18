
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, Send, Mail, Phone, Eye, EyeOff, Gift } from "lucide-react";
import { useUserStore } from "../stores/userStore";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    enteredReferralCode: "",
  });

  useEffect(() => {
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
      if (!agreedToTerms) {
        toast({
          title: "Terms Required",
          description: "Please agree to the Terms of Service and Privacy Policy",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Passwords do not match",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

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

      const authEmail = authMethod === "email" 
        ? formData.email 
        : `${formData.phoneNumber}@phone.bluepay.com`;

      // Sign up with Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: authEmail,
        password: formData.password,
        options: {
          data: {
            fullName: formData.fullName,
            username: formData.username,
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
        email: authMethod === "email" ? formData.email : formData.phoneNumber,
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
      <header className="p-4 flex items-center gap-4">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-foreground">Create Account</h1>
          <p className="text-muted-foreground text-sm">Join BluePay2026 today</p>
        </div>
      </header>

      <div className="flex-1 flex flex-col px-6 pb-8">
        <div className="max-w-md w-full mx-auto">
          {/* Email/Phone Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              type="button"
              onClick={() => setAuthMethod("email")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full font-medium transition-all ${
                authMethod === "email"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground border border-border"
              }`}
            >
              <Mail className="h-4 w-4" />
              Email
            </button>
            <button
              type="button"
              onClick={() => setAuthMethod("phone")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full font-medium transition-all ${
                authMethod === "phone"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground border border-border"
              }`}
            >
              <Phone className="h-4 w-4" />
              Phone
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <Input
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="rounded-xl bg-muted border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Username</label>
              <Input
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                className="rounded-xl bg-muted border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
                required
              />
            </div>

            {/* Email or Phone */}
            {authMethod === "email" ? (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl bg-muted border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">+234</span>
                  <Input
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="rounded-xl bg-muted border-border pl-14 pr-4 py-3 text-foreground placeholder:text-muted-foreground h-14"
                    required
                  />
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="rounded-xl bg-muted border-border px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground h-14"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
              <div className="relative">
                <Input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="rounded-xl bg-muted border-border px-4 py-3 pr-12 text-foreground placeholder:text-muted-foreground h-14"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Referral Code */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Gift className="h-4 w-4 text-primary" />
                Referral Code (Optional)
              </label>
              <Input
                name="enteredReferralCode"
                placeholder="Enter referral code"
                value={formData.enteredReferralCode}
                onChange={handleChange}
                className="rounded-xl bg-muted border-border px-4 py-3 text-foreground placeholder:text-muted-foreground h-14 uppercase text-center"
                maxLength={6}
              />
            </div>

            {referralCode && (
              <div className="bg-accent/20 border border-accent rounded-lg p-3">
                <p className="text-accent text-sm">
                  🎉 Referral code applied: <span className="font-bold">{referralCode}</span>
                </p>
              </div>
            )}

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                className="mt-0.5 border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the{" "}
                <span className="text-primary cursor-pointer">Terms of Service</span> and{" "}
                <span className="text-primary cursor-pointer">Privacy Policy</span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 font-semibold rounded-full h-14 text-base shadow-lg shadow-primary/30"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
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
