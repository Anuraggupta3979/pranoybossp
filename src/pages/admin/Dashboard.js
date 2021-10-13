import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

const Dashboard = () => (
  <Card>
    <div style={{ textAlign: "center" }}>
      <CardHeader title="Admin Panel" />
      <CardContent>If you don't know what this page is...</CardContent>
      <CardContent>then go back</CardContent>
    </div>
  </Card>
);

export default Dashboard;
