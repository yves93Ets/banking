import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSideBar";

const Home = () => {
  const accountsData = [];
  const account = { transactions: [] };
  const loggedIn = { firstName: "Yves" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficenly."
          />
          <TotalBalanceBox
            accounts={[
              {
                name: "Y",
                currentBalance: 12456,
              },
              { name: "S", currentBalance: 1378 },
              { name: "M", currentBalance: 138 },
            ]}
            totalBanks={2}
            totalCurrentBalance={1250}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
