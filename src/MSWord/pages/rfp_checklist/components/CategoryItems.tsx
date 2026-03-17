import Tag from "../../../../components/Tag";
import type { Variant } from "../../../../utils/types";

type Categories = {
  category: "Required" | "Advised" | "Conditional";
};

export default function CategoryItems() {
  const categories: Categories[] = [
    { category: "Required" },
    { category: "Advised" },
    { category: "Conditional" },
  ];

  const categoryVariantMap =(category: string): Variant => {
    switch(category){
   case "Required":
     return "primary";
   case "Advised":
    return "success";
   case "Conditional": 
   return "warning";
   default:
    return "danger"
  }
} ;

  return (
    <div>
      {categories.map((item) => (
       
        <Tag
          label={item.category}
          variant={categoryVariantMap(item.category)}
        />
      ))}
    </div>
  );
}