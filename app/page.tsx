import GradientText from "./_components/GradientText";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col gap-8">
      <div className="animated-background bg-linear-to-r from-purple-300 via-purple-200 to-purple-300 md:p-24 p-12 rounded-4xl flex flex-row space-between w-full shadow-md">
        <p className="text-3xl font-medium text-purple-700">
          Track your expenses with{" "}
          <GradientText>
            <i className="pr-1">ease</i>
          </GradientText>
        </p>
      </div>

      <div className="flex flex-col gap-4 text-xl p-4">
        <div className="flex flex-row">
          <p>
            Keep track of your expenses whenever and wherever you are with{" "}
            <GradientText text="free" /> account
          </p>
        </div>
        <div className="flex flex-row-reverse">
          <p>
            Track your expenses based on{" "}
            <GradientText text="multiple pre-defined categories" />
          </p>
        </div>
        <div className="flex flex-row">
          <p>
            Download <GradientText text="spreadsheets" /> or{" "}
            <GradientText text="PDFs" /> with your expenses summary
          </p>
        </div>
      </div>
    </div>
  );
}
