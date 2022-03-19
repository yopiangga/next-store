import withProtected from "hoc/withProtected";
import LayoutDashboard from "layout/dashboard/index";
import Link from "next/link";

function DashboardTransaction() {
  const data = [{}, {}, {}, {}, {}, {}];

  return (
    <LayoutDashboard menuActive="3" title="Semua Transaksi">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="my-6 w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Nama Pelanggan</th>
                  <th>Total Pembelian</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>Cy Ganderton</td>
                      <td>
                        <div className="badge badge-accent">Rp 50.000</div>
                      </td>
                      <td>
                        <div className="badge badge-accent">Terbayar</div>
                      </td>
                      <td>
                        <button className="btn btn-xs mx-1 btn-info">
                          Detail
                        </button>
                        <button className="btn btn-xs mx-1 btn-warning">
                          Edit
                        </button>
                        <button className="btn btn-xs mx-1 btn-error">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

// export default withProtected(Dashboard);
export default DashboardTransaction;
