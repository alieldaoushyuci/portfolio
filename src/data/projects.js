const projects = [
  { id: 1,
    title: "Personal Portfolio Site",
    description: "The site you're on right now! I built this from the ground up using tools like CSS, Git, and React"
  },
  { id: 2,
    title: 'GRAMS – Graduate Academic Management System',
    description:
        "Designed and implemented search and retrieval components allowing users to quickly query student records by campus ID, name, or" +
        "department, with responsive filtering and predictive suggestions." +
        " Built interactive data tables with sortable headers, pagination, and error handling to support large-scale datasets." +
        " Developed modal interfaces for viewing and updating student and advisor details." +
        " Integrated front-end components with backend APIs to fetch, validate, and persist academic records from external database." +
        " Improved reliability through unit and integration testing with Vitest, validating React components across multiple use cases."
  },
  { id: 3,
    title: "Data Management System",
    description: "Built a modular engine processing continent, country, and region data with full search, load, and save functionality." +
        " Integrated GUI with event-driven architecture and custom scheduling to manage interface-state interactions." +
        " Connected database schema to user interface, enabling robust state persistence and error feedback upon user interaction."
  },
  { id: 4,
    title: "Distributed Systems Simulation",
    description: "Developed a simulation modeling system supported by device propagation of alerts and cancellations through scheduled events" +
        " Implemented priority queue management and event-driven simulation techniques to ensure correct message ordering." +
        " Built modular classes handling device interactions, alert transmission, cancellations, and dynamic event scheduling." +
        " Utilized Python frameworks such as heapq, itertools, and custom-designed event schedulers to execute simulations."
  }
];

export default projects;
