import Image from "next/image";

type HeadDescriptionContainerProps = {
  heading: string;
  content: string;
  src?: string;
};

const HeadDescriptionContainer = ({
  heading,
  content,
  src,
}: HeadDescriptionContainerProps) => {
  return (
    <div className="">
      <h5 className="mt-10 text-3xl font-semibold font-jost">{heading}</h5>
      <p className="my-5">{content}</p>
      {!!src && (
        <Image
          src={src}
          alt="Blockchoin One image"
          width={758}
          height={373}
          className="my-12"
        />
      )}
    </div>
  );
};
export default HeadDescriptionContainer;
