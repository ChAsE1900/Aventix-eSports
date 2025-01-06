import Image from "next/image";

export function Logo() {
    return (
      <div className="flex items-center space-x-2">
        <Image
          src="/av/Komp_1_116.webp" 
          alt="Logo" 
          width={100} 
          height={100} 
        />
      </div>
    );
  }
