import withProtected from "hoc/withProtected";
import LayoutDashboard from "layout/dashboard/index";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts } from "services/product_services";
import NumberFormat from "react-number-format";

function DashboardProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // getProducts();
    getProducts()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayoutDashboard menuActive="1" title="Seluruh Produk">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="my-6 w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="mb-6">
            <Link href="/dashboard/products/add">
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
                    <img src={el?.data?.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{el?.data?.name}</h2>
                    <NumberFormat
                      thousandSeparator={true}
                      thousandsGroupStyle="thousand"
                      prefix={"Rp "}
                      value={el?.data?.price}
                    />
                    <p className="truncate">{el?.data?.description}</p>
                    <div className="card-actions justify-end">
                      <Link href={"/dashboard/products/edit/" + el.id}>
                        <a className="btn btn-primary">Detail</a>
                      </Link>
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
