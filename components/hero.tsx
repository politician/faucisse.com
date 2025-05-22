import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] mb-4 leading-tight">
            La Faucisse, pas une faute de frappe.
          </h1>
          <h2 className="text-xl md:text-2xl text-[#6D6D6D] mb-8">
            C&apos;est une révolution végétale. <span className="inline-block ml-2">🌱</span>
          </h2>
          <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 hover:shadow-lg">
            Découvrir la faucisse
          </Button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-[#A1E887] bg-opacity-20 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Illustration d'une faucisse végétale"
              className="object-contain p-8 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
