import SubContainer from "@/components/sub-container";

const Comparison = () => {
  return (
    <SubContainer className="grid px-4 gap-x-28 relative gap-y-6 h-full lg:grid-cols-2 grid-cols-1">
      {/* Divide line */}
      <span className="lg:flex hidden h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-300 w-px" />

      <h2 className="bg-p px-2 text-lg font-semibold lg:order-none order-1">
        Before QuillAudits
      </h2>
      <h2 className="bg-b px-2 text-lg font-semibold lg:order-none order-2">
        After QuillAudits
      </h2>

      <div className="lg:order-none order-1">
        <p>
          Exploits like reentrancy and front-running can let attackers withdraw
          extra funds and manipulate transaction timing for unfair gains
        </p>
      </div>

      <div className="lg:order-none order-2">
        <p>Implementation of reentrancy protection mechanisms.</p>
      </div>

      <div className="lg:order-none order-1">
        <p>
          Vulnerabilities could allow users to mint CDP tokens or pension shares
          indefinitely, disrupting the system&apos;s economic balance.
        </p>
      </div>

      <div className="lg:order-none order-2">
        <p>
          Ensure precision in decimal handling with standard libraries,
          recalculate accurately, fix logic errors, and secure referral systems
          against exploitation.
        </p>
      </div>
    </SubContainer>
  );
};
export default Comparison;
