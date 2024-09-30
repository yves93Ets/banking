import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
// import { getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from "react";

const MyBanks = async () => {
  const loggedIn = { firstName: "Yves G." }; // await getLoggedInUser();
  const accounts = {
    data: [
      {
        id: "qqq",
        name: "Yves",
        currentBalance: 1230,
        mask: "1225",
        sharaebleId: "sharaebleId",
      },
      {
        id: "qqq2",
        name: "Serge",
        currentBalance: 12300,
        mask: "1275",
        sharaebleId: "sharaebleId2",
      },
    ],
  }; //await getAccounts({ userId: loggedIn.$id  })

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={accounts.id}
                  account={a}
                  userName={loggedIn?.firstName}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
