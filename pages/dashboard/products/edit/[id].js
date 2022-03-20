import { useUser } from "context/user";
import withProtected from "hoc/withProtected";
import LayoutDashboard from "layout/dashboard/index";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { editProduct, getProduct } from "services/product_services";
import Router from "next/router";

function DashboardEditProduct() {
  const user = useUser();
  const [product, setProduct] = useState();
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState(false);

  useEffect(() => {
    getProduct(Router.query.id)
      .then((res) => {
        setProduct(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleImageAsFile = (e) => {
    const file = e.target.files[0];
    var pattern = /image-*/;

    if (file.type.match(pattern)) {
      setFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);

      return;
    }
  };

  const Push = () => {
    if (file != null) {
      const date = new Date();
      const time = date.getTime();

      const storage = getStorage();
      const storageRef = ref(
        storage,
        `/products/${time}_${user.email}_${file.name}`
      );

      uploadBytes(storageRef, file).then((snapshot) => {
        // console.log(snapshot);
        getDownloadURL(storageRef)
          .then((url) => {
            editProduct(
              Router.query.id,
              product?.name,
              product?.description,
              url,
              product?.price,
              product?.unit
            )
              .then((res) => {
                // console.log(res);
                Router.push("/dashboard");
              })
              .catch((err) => {
                // console.log(err);
              });
          })
          .catch((error) => {
            // console.log(error);
            // A full list of error codes is available at
          });
      });
    } else {
      editProduct(
        Router.query.id,
        product?.name,
        product?.description,
        product?.image,
        product?.price,
        product?.unit
      )
        .then((res) => {
          // console.log(res);
          Router.push("/dashboard");
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      product?.name == "" ||
      product?.description == "" ||
      product?.price == ""
    ) {
    } else {
      // console.log(product);
      Push();
    }
  };

  return (
    <LayoutDashboard menuActive="1" title="Edit Produk">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="my-6 w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="mb-6"></div>
          <section className="bg-gray-100">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="p-4 bg-white rounded-lg shadow-lg lg:p-6 col-span-4 flex justify-center">
                  <img src={product?.image} alt="" />
                </div>
                <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <label
                      htmlFor="name"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Nama Produk
                    </label>
                    <div>
                      <input
                        className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                        placeholder="Nama Produk"
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={product?.name}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="price"
                          className="block my-2 text-xs font-semibold text-gray-600 uppercase"
                        >
                          Harga
                        </label>
                        <div>
                          <input
                            className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                            placeholder="Harga"
                            type="number"
                            id="price"
                            name="price"
                            onChange={handleChange}
                            value={product?.price}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="unit"
                          className="block my-2 text-xs font-semibold text-gray-600 uppercase"
                        >
                          Satuan
                        </label>
                        <div>
                          <input
                            className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                            placeholder="Satuan"
                            type="tel"
                            id="phone"
                            name="unit"
                            onChange={handleChange}
                            value={product?.unit}
                          />
                        </div>
                      </div>
                    </div>

                    <label
                      htmlFor="description"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Deskripsi Barang
                    </label>
                    <div>
                      <textarea
                        className="w-full p-3 text-sm textarea textarea-bordered h-48 border-gray-200 rounded-lg"
                        placeholder="Deskripsi Barang"
                        rows="8"
                        id="description"
                        name="description"
                        onChange={handleChange}
                        value={product?.description}
                      ></textarea>
                    </div>

                    <label
                      htmlFor="image"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Gambar
                    </label>

                    <div className="relative h-32">
                      <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
                        <FaUpload />
                        <span className="ml-2 mt-2 w-96 text-center">
                          {file == null || file == undefined || file == ""
                            ? "Upload Image"
                            : file.name}
                        </span>
                      </div>
                      <input
                        className="cursor-pointer w-full h-40 opacity-0 pin-r pin-t absolute z-10"
                        type="file"
                        id="avatar"
                        name="avatar"
                        onChange={handleImageAsFile}
                        accept="image/png, image/jpeg"
                      />
                    </div>
                    {imagePreview ? (
                      <div className="w-full h-96 relative overflow-hidden mt-5">
                        <img
                          src={imagePreview}
                          layout="fill"
                          alt="image-preview"
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                      >
                        <span className="font-medium">
                          {" "}
                          Terapkan Perubahan{" "}
                        </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutDashboard>
  );
}

// export default withProtected(Dashboard);
export default DashboardEditProduct;
