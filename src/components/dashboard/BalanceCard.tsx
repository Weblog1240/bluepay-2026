import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useUserStore } from "../../stores/userStore";
interface BalanceCardProps {
  balance: number;
}
const BalanceCard = ({
  balance
}: BalanceCardProps) => {
  const navigate = useNavigate();
  const {
    balanceVisible,
    toggleBalanceVisibility
  } = useUserStore();
  return <div className="text-white rounded-xl p-3 mb-2 bg-muted">
      <p className="text-sm mb-1 text-slate-400">Available Balance</p>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">
            {balanceVisible ? `₦${balance.toLocaleString()}` : '₦***********'}
          </h3>
          <button onClick={toggleBalanceVisibility} className="p-1 hover:bg-white/10 rounded transition-colors">
            {balanceVisible ? <EyeOff className="h-4 w-4 text-white/80" /> : <Eye className="h-4 w-4 text-white/80" />}
          </button>
        </div>
        <Button onClick={() => navigate("/withdraw")} className="font-semibold text-xs px-2 py-1 h-8 bg-ring text-destructive-foreground">
          Withdraw
        </Button>
      </div>
      <div className="bg-white/10 rounded-lg p-2">
        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-400">Daily spend target</p>
          <p className="text-xs font-semibold">₦200,000</p>
        </div>
        <div className="w-full bg-white/20 h-1 rounded-full mt-1">
          <div style={{
          width: "35%"
        }} className="bg-white h-1 rounded-full border-secondary text-secondary"></div>
        </div>
      </div>
    </div>;
};
export default BalanceCard;