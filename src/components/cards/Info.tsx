import Paragraph from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden"
    >
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative mb-4">
        {children}
      </div>
      <h2 className="text-heading-2 w-max relative font-semibold md:text-xl mb-2">
        {title}
      </h2>
      <Paragraph className="md:text-[16px] xl:text-lg">
        {description}
      </Paragraph>
    </div>
  );
};

export default Info;
