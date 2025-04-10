import Button from "../ui/Button/Button";

interface SuccessProps {
  onReset: () => void;
}

const Success = ({ onReset }: SuccessProps) => {
  return (
    <div className="text-center mx-auto w-full grow flex flex-col justify-center items-center max-w-[372px]">
      <h2 className="text-link-white">Thank you! 🤘</h2>
      <p className="text-link pt-2 pb-8">
        Your message has been accepted. You will receive answer soon!
      </p>
      <Button
        style="py-2.5 px-3 bg-link-active text-white rounded-lg"
        text="send-new-message"
        onClick={onReset}
      />
    </div>
  );
};

export default Success;
