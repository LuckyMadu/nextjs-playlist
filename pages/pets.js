import Image from "next/image";
import img from "../public/4.jpg";

export default function Pets() {
  return (
    <div>
      <Image
        src={img}
        placeholder="blur"
        blurDataURL=""
        alt="pet"
        width="320"
        height="420"
      />

      {["1", "2", "3", "4", "5"].map((item) => {
        return (
          <div key={item}>
            <Image src={`/${item}.jpg`} alt="pet" width="320" height="420" />
          </div>
        );
      })}
    </div>
  );
}
