//Custom Field with URL example

import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }) => {
  const record = useRecordContext();

  // Ternary statement, returns null if no record comes back.
  return record ? (
    // The sx prop is like React’s style prop, except it supports theming, media queries, shorthand properties, and much more. It’s a CSS-in-JS solution, so you’ll have to use the JS variants of the CSS property names (e.g. textDecoration instead of text-decoration).
    <Link href={record[source]} sx={{ textDecoration: "none" }}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  ) : null;
};

export default MyUrlField;
