import AddBank from "@/components/profile/AddBank";
import { ArrowLeft } from "lucide-react";

const MyWallet = () => {
  return (
    <div>
      
      <h1 className="lg:text-[2rem] text-[1rem] font-bold">MY Wallet</h1>
      <p className="opacity-50 pt-2 text-[.8rem]">Add Your Bank Account for Withdrawals</p>

      <AddBank />
    </div>
  );
};

export default MyWallet;
