import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useUserStore } from "../../stores/userStore";

interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  const navigate = useNavigate();
  const { balanceVisible, toggleBalanceVisibility } = useUserStore();
  
  return (
    <div className="bg-card text-foreground rounded-xl p-4 mb-2 border border-border">
      <p className="text-sm mb-1 text-muted-foreground">Available Balance</p>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold text-foreground">
            {balanceVisible ? `₦${balance.toLocaleString()}` : '₦***********'}
          </h3>
          <button 
            onClick={toggleBalanceVisibility} 
            className="p-1 hover:bg-muted rounded transition-colors"
          >
            {balanceVisible ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>
        <Button 
          onClick={() => navigate("/withdraw")} 
          className="font-semibold text-xs px-3 py-1 h-8 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Withdraw
        </Button>
      </div>
      <div className="bg-muted rounded-lg p-3">
        <div className="flex justify-between items-center">
          <p className="text-xs text-muted-foreground">Daily spend target</p>
          <p className="text-xs font-semibold text-foreground">₦200,000</p>
        </div>
        <div className="w-full bg-border h-1.5 rounded-full mt-2">
          <div 
            style={{ width: "35%" }} 
            className="bg-primary h-1.5 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;