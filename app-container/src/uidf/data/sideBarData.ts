export type RouteProps = {
  text: string,
  path: string,
  cName: string
};

type RouteGroupProp = {
  [value: string] : Array<RouteProps>,
}

type SideBarDataProps = Array<RouteGroupProp>

export const SideBarData: SideBarDataProps = [
  {
    ["navigation"]: [
      {
        text: 'Dashboard',
        path: '/dashboard',
        cName: ''
      },
      {
        text: 'Workspaces',
        path: '/',
        cName: ''
      },
      {
        text: 'Projects',
        path: '/',
        cName: ''
      },
      {
        text: 'Data Connections',
        path: '/data/connections',
        cName: ''
      },
      {
        text: 'Data Sources',
        path: '/data/source',
        cName: ''
      },
    ]
  },
  {
    ["ai/ml"]: [
      {
        text: 'Models',
        path: '/',
        cName: ''
      },
      {
        text: 'Autoscaling AI-ML',
        path: '/',
        cName: ''
      },
    ]
  }
]
