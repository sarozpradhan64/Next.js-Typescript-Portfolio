import FrontendLayout from "@/components/layouts/FrontendLayout";
import WorkFilter from "./_partials/WorkFilter";
import workData from "@/data/workData";
import { Work } from "@/types/work";

export default async function Page() {
  const works: Work[] = workData;

  return (
    <FrontendLayout title="Works">
      <WorkFilter works={works} />
    </FrontendLayout>
  );
}
