import { GraphQLResolveInfo } from "graphql";

export function getProjection(info: GraphQLResolveInfo) {
  const fields = info.fieldNodes[0].selectionSet?.selections || [];

  const projection: Record<string, 1> = {};

  fields.forEach((field: any) => {
    if (field.name) {
      projection[field.name.value] = 1;
    }
  });

  return projection;
}
