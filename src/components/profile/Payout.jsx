import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Payout = () => {
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("");
  const [reference, setReference] = useState("");
  const router = useRouter();

  const verify = async () => {
    const verify = await fetch(
      `https://tazkora-3.onrender.com/api/wallet/verify?reference=${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );
    const response = await verify.json();
    console.log(response);
    if (typeof window !== "undefined") {
      localStorage.removeItem("reference");
    }
  };

  const withdraw = async (amount, accountNumber) => {
    const data = await fetch(
      "https://tazkora-3.onrender.com/api/wallet/withdraw",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 20,
          bankCode: "057",
          accountNumber: 91456587483,
          accountName: "Test Account",
        }),
      },
    );
    const response = await data.json();
    setUrl(response.data.authorization_url);
    router.push(url);
  };
  return (
    <div className="pb-10">
      <h1 className="font-bold lg:text-[2rem]">Payout</h1>
      <div className="pt-10">
        <h1 className="font-bold lg:text-[2rem]">Withdraw to Bank</h1>
        <div className="grid gap-5">
          <p className="pt-3 text-[.8rem] opacity-50">
            Available balance is: ₦8,860.37
          </p>
          <p className="text-[.8rem] opacity-50">
            Use the form below to withdraw instantly.
          </p>
          <p className="text-bold pt-2 text-[.8rem] font-bold">
            Amount to withdraw for now (minimum: ₦5,000.000)
          </p>
        </div>
        <input
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="mt-2 w-full rounded bg-itembg p-3 text-white opacity-40 outline-none lg:w-[370] lg:p-5"
          placeholder="e.g 5000"
        />
        <p className="text-bold py-3 text-[.8rem] font-bold">
          Check Destination
        </p>
        <div>
          <div className="flex w-full items-center rounded-lg bg-itembg p-3 lg:w-[370] lg:p-5">
            <h1>Wema Bank - 025392660</h1>
          </div>

          <button className="mt-10 w-full rounded-lg bg-blue py-3 text-center text-white lg:w-[370]">
            WITHDRAW NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payout;
