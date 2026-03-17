import Tag from "../../../components/Tag";
import SuccessDoc from "../../../assets/SuccessDoc.svg";
import ErrorDoc from "../../../assets/ErrorDoc.svg";
import ReloadIcon from "../../../assets/reload-icon.svg";
import CloseIcon from "../../../assets/close-icon.svg";
import Button from "../../../components/Button";

type Props = {
  fileName: string;
  fileSize: string;
  status: "warning" | "success" | "danger";
  message: string;
  goBack: () => void;
  generateChecklist: () => void;
};

export default function UploadedCard({
  fileName,
  fileSize,
  status,
  message,
  goBack,
  generateChecklist,
}: Props) {
  const isError = status === "danger";

  return (
    <div className="flex flex-col items-center px-4  mt-1 grow">
      {/* {Upload section} */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg w-full 
      ${isError ? "bg-[#FEF2F2] " : "bg-gray-100"}`}
      >
        <div className="flex items-center gap-3">
          <div className="h-4 w-4">
            {isError ? (
              <img src={ErrorDoc} alt="Error Document" />
            ) : (
              <img src={SuccessDoc} alt="Success Document" />
            )}
          </div>

          <div>
            <p className="text-xs font-medium">{fileName}</p>
            {!isError && <p className="text-xs text-gray-500">{fileSize}</p>}

            {isError && (
              <p className="text-xs text-[#DC2626]">
                File too large (max 10MB)
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isError && <Tag label={message} variant={status} />}

          {isError && (
            <>
              <button onClick={() => goBack()} className="cursor-pointer p-1">
                <img src={ReloadIcon} alt="Reload Icon" />
              </button>

              <button className="cursor-pointer p-1 ">
                <img src={CloseIcon} alt="Close Icon" />
              </button>
            </>
          )}
        </div>
      </div>

      <Button
        onClick={generateChecklist}
        text="Generate Compliance Checklist"    
        isDisabled={status !== "success"}   
        className={`h-9 mt-4 ${
          status === "success"
            ? "bg-[#6657FF]"
            : "bg-gray-400 "
        }`}
      />
    </div>
  );
}
