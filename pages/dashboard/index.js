import withProtected from "hoc/withProtected";
import LayoutDashboard from "layout/dashboard/index";

function Dashboard() {
  return (
    <LayoutDashboard menuActive="0" title="Dashboard">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
          Good afternoom, Admin
        </h1>
        <h2 className="text-md text-gray-400">
          Here&#x27;s what&#x27;s happening with your ambassador account today.
        </h2>
        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 w-full">
            <div className="">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <p className="text-2xl text-black dark:text-white font-bold">
                  12
                </p>
                <p className="text-gray-400 text-sm">Pengunjung Harian</p>
              </div>
            </div>
            <div className="">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <p className="text-2xl text-black dark:text-white font-bold">
                  12
                </p>
                <p className="text-gray-400 text-sm">Seluruh Pengunjung</p>
              </div>
            </div>
            <div className="">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <p className="text-2xl text-black dark:text-white font-bold">
                  12
                </p>
                <p className="text-gray-400 text-sm">Total Pengguna</p>
              </div>
            </div>
            <div className="">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <p className="text-2xl text-black dark:text-white font-bold">
                  12
                </p>
                <p className="text-gray-400 text-sm">Total Produk</p>
              </div>
            </div>
            <div className="">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <p className="text-2xl text-black dark:text-white font-bold">
                  12
                </p>
                <p className="text-gray-400 text-sm">Total Transaksi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

// export default withProtected(Dashboard);
export default Dashboard;
