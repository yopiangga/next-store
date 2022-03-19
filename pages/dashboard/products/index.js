import withProtected from "hoc/withProtected";
import LayoutDashboard from "layout/dashboard/index";
import Link from "next/link";

function DashboardProduct() {
  const data = [{}, {}, {}, {}, {}, {}];

  return (
    <LayoutDashboard menuActive="1" title="Seluruh Produk">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="my-6 w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="mb-6">
            <Link href="dashboard/product/add">
              <a className="btn">Tambah Produk</a>
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-1 w-full">
            {data?.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="card card-compact lg:w-72 w-96 bg-base-100 shadow-xl"
                >
                  <figure>
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <div className="badge badge-accent">Rp 50.000</div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Detail</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

// export default withProtected(Dashboard);
export default DashboardProduct;
