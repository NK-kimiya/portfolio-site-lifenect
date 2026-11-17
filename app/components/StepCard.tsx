import Image from "next/image";
import ZoomableImage from "./ZoomableImage";

type Step = {
  id: string;
  stepTitle: string;
  description: string;
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt: string;
};

type StepListProps = {
  title: string;
  steps: Step[];
};

export default function StepList({ title, steps }: StepListProps) {
  return (
    <section className="space-y-6">
      <h4 className="text-lg font-bold">{title}</h4>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-1">
        {steps.map((step) => (
          <article key={step.id} className="my-4">
            <div className="w-full">
              <p className="font-semibold w-4/5 mx-auto">{step.stepTitle}</p>
            </div>

            <ZoomableImage
              src={step.imageSrc}
              mobileSrc={step.mobileImageSrc}
              alt={step.imageAlt}
            />

            <small className="block w-4/5 mx-auto">クリックで画像を拡大</small>
            <p className="md:w-4/5 mx-auto mt-2 text-gray-600">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
