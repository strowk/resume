import { FunctionComponent } from "react";

export const SkillBadgesGroup: FunctionComponent<{ name: string }> = ({
  children,
  name,
}) => (
  <div className="my-2 bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-md">
    <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
      {name}
    </dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      {children}
    </dd>
  </div>
);
