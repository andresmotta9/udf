/// <reference types="react-scripts" />

declare module "data_mf/connection" {
  import { ComponentType } from "react";
  interface Props { }
  const MF_data_connection: ComponentType<Props>
  export default MF_data_connection;
}
declare module "data_mf/source" {
  import { ComponentType } from "react";
  interface Props { }
  const Data_source: ComponentType<Props>
  export default Data_source;
}
declare module "dashboard_mf/dashboard" {
  import { ComponentType } from "react";
  interface Props { 
    name: string
   }
  const Dashboard_mf: ComponentType<Props>
  export default Dashboard_mf;
}
