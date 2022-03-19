import withProtected from "hoc/withProtected";
import LayoutDashboard from "layout/dashboard/index";
import Link from "next/link";

function DashboardUsers() {
  const data = [{}, {}, {}, {}, {}, {}];

  return (
    <LayoutDashboard menuActive="2" title="Seluruh Pengguna">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="my-6 w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Nama Pelanggan</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>No HP</th>
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
                        <td>yopiangga@gmail.com</td>
                      </td>
                      <td>
                        <td>Desa Gambyok Kecamatan Grogol</td>
                      </td>
                      <td>
                        <td>082330410865</td>
                      </td>
                      <td>
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
export default DashboardUsers;
