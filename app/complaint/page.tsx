import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";

const Complaint = async () => {
  const pageIdInStrapi = 4;
  const pageData = await getLegalPage(pageIdInStrapi);
  return <Legal data={pageData} />;
};

export default Complaint;
