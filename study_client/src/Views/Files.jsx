import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../redux/actions/fileActions";
import { FaFilePdf, FaArrowRight } from "react-icons/fa";
import UploadFile from "../components/UploadFile";

const Files = () => {
  const  files  = useSelector((state) => state.files);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFiles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <section className="bg-white pt-6 2xl:container ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <UploadFile />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-28 lg:gap-y-2">
          {files &&
            files.map((file) => (
              <div
                key={file.id}
                className="relative mt-6 flex w-56 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className="p-6">
                  <FaFilePdf className="text-9xl text-gray-100" />
                  <h5 className="mb-2 block font-sans text-sm font-thin leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {file.data.originalname}
                  </h5>
                </div>
                <div className="p-6 pt-0">
                  <a
                    className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                    href={file.data.publicurl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-dark="true"
                    >
                      Leer el archivo
                      <FaArrowRight />
                    </button>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Files;
