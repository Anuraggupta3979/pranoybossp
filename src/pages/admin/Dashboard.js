import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

const Dashboard = () => (
  <Card>
    <div style={{ textAlign: "center" }}>
      <CardHeader title="Admin Panel" />
      <CardContent>If you don't know what this page does...</CardContent>
      <CardContent>
        <a href="/">then go back</a>
      </CardContent>
      <br />
    </div>
  </Card>
);

export default Dashboard;
