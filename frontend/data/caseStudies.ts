import { CaseStudy } from '../types';

export const ALL_CASE_STUDIES: CaseStudy[] = [
  // 1. Foundever - Timekeeping (El Salvador)
  {
    slug: "global-bpo-el-salvador-timekeeping",
    id: "cs-001",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "El Salvador",
    industry: "BPO/Staffing",
    companySize: "10,000+ employees",
    projectType: "Implementation",
    moduleName: "Timekeeping",
    moduleColor: "indigo",
    caseStudyTitle: "Timekeeping Automation",
    roadmap: {
      problem: {
        short: "Manual spreadsheets created massive payroll delays and frequent compliance issues for part-time agents.",
        full: "The organization's El-Salvador operations relied heavily on manual timekeeping using Excel. This created multiple challenges: frequent payroll delays affecting employee satisfaction, inconsistent union rule application leading to compliance risks, and difficulty tracking overtime for part-time staff. The payroll team spent 60+ hours monthly reconciling errors.",
        icon: "AlertCircle"
      },
      action: {
        short: "Conducted end-to-end discovery to map complex union rules and overtime logic.",
        full: "We embedded with the payroll team to document every pay rule and union agreement. We identified 23 distinct pay rule combinations, mapped shift premiums, and documented integration points with their local payroll provider. This discovery resulted in a precise configuration blueprint.",
        icon: "Search"
      },
      solution: {
        short: "Implemented UKG Pro Timekeeping with automated pay rules, rounding logic, and real-time exception management.",
        full: "We configured UKG Pro with 15 distinct automated pay rules covering shift premiums, union OT, and statutory deductions. We implemented exception management workflows to flag anomalies for manager review and integrated time data directly with the payroll system via API.",
        icon: "Zap"
      },
      result: {
        short: "70% reduction in payroll errors and 50% faster processing time.",
        full: "Payroll processing errors dropped by 70%, and cycle time decreased from 10 days to 5 days. Compliance accuracy improved significantly with automated tracking of union rules, and the team regained 25+ hours per month for strategic tasks.",
        icon: "Trophy"
      }
    },
    metrics: [
      { label: "Payroll Error Reduction", value: "70%", type: "percentage", impact: "accuracy", icon: "TrendingDown" },
      { label: "Processing Speed", value: "50%", type: "percentage", impact: "time", icon: "Zap" },
      { label: "Compliance", value: "Improved", type: "qualitative", impact: "accuracy", icon: "ShieldCheck" }
    ],
    deepDive: {
      challengeSection: "The organization's El-Salvador operations faced critical challenges with manual timekeeping. Calculating union-mandated shift premiums and statutory deductions was error-prone, creating a 4-day lag in payroll processing. This manual intervention resulted in a high error rate (approx. 12%), causing employee dissatisfaction and potential labor law liabilities.",
      approachSection: "Our team deployed the 'Mindview Velocity' methodology. We started with a 2-week 'Process Mining' phase where we sat with payroll managers to document every exception. We then conducted 3 rounds of parallel testing to ensure penny-perfect accuracy against the legacy system before go-live.",
      technicalSection: "The implementation leveraged UKG Pro's advanced rules engine. We used custom middleware to export calculated time data to the local payroll provider and implemented IP-restricted web clocking to ensure security.",
      impactSection: "The 70% reduction in payroll errors transformed the department from a data-entry shop to a strategic audit function. Employee trust in payroll accuracy skyrocketed, and the scalable system architecture now supports their rapid regional expansion without adding administrative headcount."
    },
    relatedBy: {
      sameModule: ["manufacturing-usa-timekeeping-rules", "global-bpo-mexico-pay-codes"],
      sameCountry: ["global-bpo-el-salvador-scheduling"],
      sameCompany: ["global-bpo-el-salvador-scheduling", "global-bpo-costa-rica-accruals"]
    },
    seoTitle: "Timekeeping Automation Case Study | Global BPO | Mindview",
    seoDescription: "See how a global BPO leader reduced payroll errors by 70% and processing time by 50% with automated UKG Timekeeping.",
    keywords: ["UKG Pro Timekeeping", "Payroll Automation", "Union Rules", "El Salvador", "BPO WFM"],
    publishedDate: "2025-01-15",
    featured: true,
    difficulty: "High"
  },

  // 2. Foundever - Scheduling (El Salvador)
  {
    slug: "global-bpo-el-salvador-scheduling",
    id: "cs-002",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "El Salvador",
    industry: "BPO/Staffing",
    companySize: "10,000+ employees",
    projectType: "Optimization",
    moduleName: "Scheduling",
    moduleColor: "emerald",
    caseStudyTitle: "Scheduling Optimization",
    roadmap: {
      problem: {
        short: "Store managers lacked visibility into staffing needs, causing overstaffing & understaffing.",
        full: "Managers were using static spreadsheets to schedule thousands of agents, leading to misalignment between client call volumes and agent availability. This resulted in unnecessary overtime costs during peaks and idle time during lulls.",
        icon: "AlertCircle"
      },
      action: {
        short: "Analyzed historical demand patterns and built optimized scheduling templates.",
        full: "We analyzed 12 months of call volume data to identify demand trends. We then designed standard shift templates and coverage rules that aligned with both client SLAs and local labor laws regarding rest periods.",
        icon: "BarChart3"
      },
      solution: {
        short: "Implemented Basic Scheduling with shift templates, coverage rules, and employee preferences.",
        full: "We deployed UKG Scheduling with pre-built rotation patterns. We enabled employee self-service for availability preferences, allowing the system to auto-suggest shifts that matched both business need and agent desire.",
        icon: "Calendar"
      },
      result: {
        short: "Improved schedule accuracy by 40% and reduced labor costs by 18%.",
        full: "Schedule adherence improved by 40% within the first quarter. By better matching supply to demand, the organization reduced wasted labor costs by 18% while maintaining or exceeding client Service Level Agreements.",
        icon: "TrendingUp"
      }
    },
    metrics: [
      { label: "Schedule Accuracy", value: "40%", type: "percentage", impact: "accuracy", icon: "Target" },
      { label: "Labor Cost Savings", value: "18%", type: "percentage", impact: "cost", icon: "DollarSign" },
      { label: "SLA Adherence", value: "Improved", type: "qualitative", impact: "other", icon: "CheckCircle" }
    ],
    deepDive: {
      challengeSection: "In the BPO industry, labor is the biggest cost. The organization's manual scheduling process was 'flying blind,' resulting in staffing gaps that risked client SLAs and overstaffing that eroded margins. The lack of visibility into real-time availability meant schedule changes took hours to communicate.",
      approachSection: "We took a data-driven approach, ingesting historical call arrival patterns to build a 'demand curve.' We then workshopped with site leads to define 'rules of engagement' for shift swaps and overtime, ensuring fairness and compliance.",
      technicalSection: "We configured UKG Basic Scheduling with 'Workload Planner' concepts. We set up 20+ rotational shift patterns and enabled the mobile app for agents to view schedules and request swaps, reducing the administrative burden on supervisors.",
      impactSection: "The 18% reduction in labor costs was a direct hit to the bottom line. Beyond cost, the transparency of the new system improved agent engagement, as they now had mobile access to their schedules weeks in advance, improving work-life balance."
    },
    relatedBy: {
      sameModule: ["manufacturing-usa-scheduling"],
      sameCountry: ["global-bpo-el-salvador-timekeeping"],
      sameCompany: ["global-bpo-el-salvador-timekeeping", "global-bpo-costa-rica-accruals"]
    },
    seoTitle: "Scheduling Optimization Case Study | Global BPO | UKG | Mindview",
    seoDescription: "Learn how a global BPO used UKG Scheduling to improve schedule accuracy by 40% and reduce labor costs by 18%.",
    keywords: ["UKG Scheduling", "Labor Optimization", "BPO Staffing", "Cost Reduction", "Shift Management"],
    publishedDate: "2025-01-16",
    featured: false,
    difficulty: "Medium"
  },

  // 3. Foundever - Accruals (Costa Rica)
  {
    slug: "global-bpo-costa-rica-accruals",
    id: "cs-003",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Costa Rica",
    industry: "BPO/Staffing",
    companySize: "5,000+ employees",
    projectType: "Implementation",
    moduleName: "Accruals",
    moduleColor: "purple",
    caseStudyTitle: "Accruals Modernization",
    roadmap: {
      problem: {
        short: "Leave balances were inconsistent due to manual updates across departments.",
        full: "Employees had no visibility into their vacation balances, leading to a flood of HR tickets. Manual spreadsheets meant balances were often weeks out of date, resulting in 'negative balance' approvals where employees took time off they hadn't earned.",
        icon: "ClipboardX"
      },
      action: {
        short: "Gathered policy documentation, led cross-functional workshops, and designed accrual logic.",
        full: "We audited the existing leave policies across all employee tiers (agents, leads, managers). We identified discrepancies between HR policy and actual practice, standardizing the rules for carryover, forfeiture, and tenure-based increases.",
        icon: "Users"
      },
      solution: {
        short: "Implemented Accruals Module with automated balance updates, carryover rules, and dashboards.",
        full: "We configured UKG Accruals to calculate balances in real-time based on hours worked. We built self-service dashboards allowing employees to see their projected balance for future dates, enabling better holiday planning.",
        icon: "LayoutDashboard"
      },
      result: {
        short: "Achieved 100% accuracy in leave management and eliminated manual adjustments.",
        full: "The system now maintains 100% balance accuracy without manual intervention. HR ticket volume regarding leave balances dropped by 90%, and the risk of unearned leave liability was completely eliminated.",
        icon: "CheckSquare"
      }
    },
    metrics: [
      { label: "Balance Accuracy", value: "100%", type: "count", impact: "accuracy", icon: "CheckCircle" },
      { label: "Manual Adjustments", value: "Eliminated", type: "qualitative", impact: "time", icon: "Trash2" },
      { label: "HR Ticket Volume", value: "-90%", type: "percentage", impact: "cost", icon: "TrendingDown" }
    ],
    deepDive: {
      challengeSection: "In Costa Rica, vacation liability is a financial debt. The organization's manual tracking created a financial risk where the company couldn't accurately report this liability on the balance sheet. Furthermore, the lack of transparency frustrated employees who wanted to plan their time off.",
      approachSection: "We facilitated a 'Policy Harmonization' workshop, bringing Legal, HR, and Finance to the table. We mapped the 'hire-to-retire' lifecycle of a leave balance, including complex scenarios like leave-of-absence freezes and tenure bumps.",
      technicalSection: "We used UKG's advanced scripting for accruals to handle Costa Rica's specific logic regarding 'proportional vacation' payment upon termination. We enabled the 'Probationary Period' logic to prevent withdrawal before 3 months of service.",
      impactSection: "Achieving 100% accuracy transformed the year-end financial audit process from a month-long nightmare to a simple report generation. Employees now trust the system implicitly, boosting morale and reducing friction with HR."
    },
    relatedBy: {
      sameModule: ["global-bpo-mexico-accruals", "global-bpo-columbia-accruals"],
      sameCountry: ["global-bpo-costa-rica-sso"],
      sameCompany: ["global-bpo-costa-rica-sso", "global-bpo-mexico-accruals"]
    },
    seoTitle: "Accruals Management Case Study | Global BPO Costa Rica | UKG",
    seoDescription: "A global BPO leader achieved 100% leave balance accuracy and eliminated manual adjustments by implementing automated UKG Accruals.",
    keywords: ["UKG Accruals", "Leave Management", "Costa Rica Payroll", "HR Automation", "Liability Tracking"],
    publishedDate: "2025-01-17",
    featured: false,
    difficulty: "Medium"
  },

  // 4. Foundever - Access (Costa Rica)
  {
    slug: "global-bpo-costa-rica-sso",
    id: "cs-004",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Costa Rica",
    industry: "BPO/Staffing",
    companySize: "5,000+ employees",
    projectType: "Implementation",
    moduleName: "Access",
    moduleColor: "cyan",
    caseStudyTitle: "SSO Implementation",
    roadmap: {
      problem: {
        short: "Frequent password resets and login issues hindered WFM adoption.",
        full: "With high turnover in the BPO sector, managing separate credentials for UKG was a security nightmare. IT spent excessive time on password resets, and employees often couldn't access their schedules from home due to forgotten passwords.",
        icon: "Lock"
      },
      action: {
        short: "Engaged IT & security teams, completed SSO questionnaire, and coordinated metadata exchange.",
        full: "We coordinated between the client's Global Security team and UKG Cloud Operations. We defined the SAML 2.0 requirements, mapped user identities, and established security groups for role-based access.",
        icon: "Settings"
      },
      solution: {
        short: "Implemented Single Sign-On (SSO) with Azure/Okta integration.",
        full: "We successfully deployed SSO integrated with their corporate Azure AD. This allowed employees to access UKG using their standard network credentials with one click, both on desktop and mobile devices.",
        icon: "Key"
      },
      result: {
        short: "Login issues dropped by 85%, user adoption increased significantly within 2 weeks.",
        full: "Password-related IT tickets dropped by 85% overnight. Mobile app adoption surged as login friction vanished. Security was enhanced by centralizing access control—terminating an employee in AD now instantly revoked UKG access.",
        icon: "UserCheck"
      }
    },
    metrics: [
      { label: "Login Issues", value: "-85%", type: "percentage", impact: "time", icon: "TrendingDown" },
      { label: "User Adoption", value: "Increased", type: "qualitative", impact: "adoption", icon: "Users" },
      { label: "Security Risk", value: "Minimized", type: "qualitative", impact: "accuracy", icon: "Shield" }
    ],
    deepDive: {
      challengeSection: "Security and ease-of-access are often at odds. The organization needed to secure sensitive schedule and pay data while making it easily accessible to a young, mobile-first workforce. The friction of a secondary password was a major barrier to system adoption.",
      approachSection: "We treated this as an infrastructure project. We worked with the Identity Management team to clean up Active Directory data, ensuring every user had a valid email and ID match for UKG. We conducted 'User Acceptance Testing' specifically for mobile login flows.",
      technicalSection: "The solution utilized SAML 2.0 protocol with Azure Active Directory as the Identity Provider (IdP). We configured 'Just-in-Time' provisioning logic where applicable and set up multifactor authentication (MFA) policies to align with corporate security standards.",
      impactSection: "The immediate impact was IT efficiency—saving hundreds of helpdesk hours annually. The strategic impact was data security; ensuring that only active, credentialed employees could access workforce data is a critical compliance requirement for their banking clients."
    },
    relatedBy: {
      sameModule: [],
      sameCountry: ["global-bpo-costa-rica-accruals"],
      sameCompany: ["global-bpo-costa-rica-accruals", "global-bpo-el-salvador-timekeeping"]
    },
    seoTitle: "SSO Security Case Study | UKG Access | Global BPO",
    seoDescription: "How a global BPO reduced login issues by 85% and secured workforce data by implementing Single Sign-On (SSO).",
    keywords: ["UKG SSO", "Azure AD Integration", "Identity Management", "WFM Security", "User Adoption"],
    publishedDate: "2025-01-18",
    featured: false,
    difficulty: "Low"
  },

  // 5. Fresh Water Fish - Analytics (Canada)
  {
    slug: "food-processing-canada-analytics",
    id: "cs-005",
    companyName: "Canadian Federal Fish Processing & Marketing Enterprise",
    country: "Canada",
    industry: "Manufacturing/Food",
    companySize: "500-1000 employees",
    projectType: "Implementation",
    moduleName: "Analytics",
    moduleColor: "orange",
    caseStudyTitle: "Operational Analytics",
    roadmap: {
      problem: {
        short: "Leadership had no consolidated dashboards for labor insights, OT trends, or attendance.",
        full: "The executive team relied on static, month-old PDF reports to make labor decisions. They couldn't drill down into why overtime was spiking or identify which departments had the highest absenteeism until it was too late.",
        icon: "BarChart2"
      },
      action: {
        short: "Identified KPIs, Metrics built custom analytic widgets, validated with business owners.",
        full: "We held 'Metric Definition' workshops with the VP of Operations and HR Director. We defined exactly how 'Overtime %' and 'Absenteeism Rate' should be calculated to ensure everyone trusted the numbers.",
        icon: "Search"
      },
      solution: {
        short: "Delivered UKG Pro Analytics dashboards across Overtime, Attendance, Labor Cost, and Trends.",
        full: "We built a suite of 5 custom dashboards in UKG Analytics (Data Views & Visuals). These provided real-time heatmaps of labor costs and automated email delivery of weekly exception reports to supervisors.",
        icon: "PieChart"
      },
      result: {
        short: "Reduced report preparation time by 60%, enabled real-time operational decisions.",
        full: "HR and Finance stopped spending 3 days a month manually compiling reports. Executives now have self-service access to real-time data, enabling proactive staffing adjustments that saved estimated 5% in annual labor spend.",
        icon: "Clock"
      }
    },
    metrics: [
      { label: "Report Prep Time", value: "-60%", type: "percentage", impact: "time", icon: "Clock" },
      { label: "Decision Speed", value: "Real-time", type: "qualitative", impact: "time", icon: "Zap" },
      { label: "Labor Visibility", value: "100%", type: "count", impact: "accuracy", icon: "Eye" }
    ],
    deepDive: {
      challengeSection: "In food processing, margins are thin. The organization needed to understand their labor cost per unit produced, but their data was locked in siloed systems. They were reactive—fixing overtime issues a month after they occurred.",
      approachSection: "Our approach was 'Start with the Question.' We asked executives: 'What decision do you need to make every Monday morning?' We then worked backwards to identify the data points required to support those decisions.",
      technicalSection: "We utilized UKG Dimensions Analytics/Dataviews. We created calculated columns for 'Variance to Budget' and configured drill-down capabilities allowing users to go from a high-level plant view down to an individual employee's timecard in 3 clicks.",
      impactSection: "The cultural shift was massive. Discussions changed from 'Are these numbers right?' to 'How do we fix this trend?' Real-time data access empowered frontline managers to own their labor costs, fostering a culture of accountability."
    },
    relatedBy: {
      sameModule: [],
      sameCountry: ["food-processing-canada-migration"],
      sameCompany: ["food-processing-canada-migration"]
    },
    seoTitle: "WFM Analytics Case Study | Food Processing Canada | UKG Dimensions",
    seoDescription: "A Canadian fish processing enterprise reduced reporting time by 60% and gained real-time labor visibility with custom UKG Analytics.",
    keywords: ["UKG Analytics", "Labor Reporting", "Business Intelligence", "Manufacturing WFM", "Data Visualization"],
    publishedDate: "2025-01-19",
    featured: true,
    difficulty: "Medium"
  },

  // 6. Komatsu - Mobile (USA)
  {
    slug: "manufacturing-usa-mobile-geofencing",
    id: "cs-006",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Mobile",
    moduleColor: "pink",
    caseStudyTitle: "Mobile Geofencing",
    roadmap: {
      problem: {
        short: "Field employees missed punches, causing payroll adjustments & inaccuracies.",
        full: "Field service technicians repairing heavy machinery often forgot to log hours until they returned to the office. This lag created massive payroll reconciliation efforts and billing disputes with customers regarding service hours.",
        icon: "Smartphone"
      },
      action: {
        short: "Designed mobile workflows; implemented geofencing rules and punch reminders.",
        full: "We mapped the technician workflow and identified the need for location-verified punching. We collected GPS coordinates for all service depots and client sites to build a robust geofencing database.",
        icon: "MapPin"
      },
      solution: {
        short: "Configured Mobile WFM with Geofencing and punch exception alerts.",
        full: "We deployed the UKG Mobile App with strict geofencing. Technicians can now only punch in when physically onsite. We enabled push notifications to remind them to punch out when leaving a geofenced zone.",
        icon: "Radio"
      },
      result: {
        short: "Missed punches reduced by 55%, payroll accuracy improved significantly.",
        full: "Missed punches dropped by 55% in the first month. Payroll accuracy improved, and customer billing for service hours became indisputable due to GPS-stamped timestamps.",
        icon: "CheckCircle2"
      }
    },
    metrics: [
      { label: "Missed Punches", value: "-55%", type: "percentage", impact: "accuracy", icon: "TrendingDown" },
      { label: "Billing Accuracy", value: "Improved", type: "qualitative", impact: "cost", icon: "DollarSign" },
      { label: "Field Visibility", value: "100%", type: "count", impact: "accuracy", icon: "Map" }
    ],
    deepDive: {
      challengeSection: "Managing a distributed workforce is difficult. The organization's field technicians are their most valuable assets but also the hardest to track. The reliance on honor-system paper logs was outdated and prone to error, affecting both payroll and client trust.",
      approachSection: "We focused on 'User Experience first.' We knew that if the app was hard to use, techs wouldn't use it. We conducted pilots with field teams to refine the button layout and geofence radius sensitivity.",
      technicalSection: "We configured UKG Geofencing with specific radii for large mining sites and depots. We utilized the mobile offline capability ensuring punches were captured even when cellular service was lost.",
      impactSection: "The transparency provided by GPS timestamps resolved billing disputes instantly. The system proved service duration irrefutably, protecting revenue and streamlining the payroll-to-billing reconciliation process."
    },
    relatedBy: {
      sameModule: ["global-bpo-mexico-attestation"], 
      sameCountry: ["manufacturing-usa-timekeeping-rules", "manufacturing-usa-transfers", "manufacturing-usa-work-orders"],
      sameCompany: ["manufacturing-usa-timekeeping-rules", "manufacturing-usa-work-orders"]
    },
    seoTitle: "Mobile Geofencing Case Study | Manufacturing USA | UKG WFM",
    seoDescription: "A large heavy equipment manufacturer reduced missed punches by 55% and improved billing accuracy using UKG Mobile Geofencing.",
    keywords: ["UKG Mobile", "Geofencing", "Field Service WFM", "Time Tracking", "GPS Punching"],
    publishedDate: "2025-01-20",
    featured: false,
    difficulty: "Medium"
  },

  // 7. Komatsu - Timekeeping Rules (USA)
  {
    slug: "manufacturing-usa-timekeeping-rules",
    id: "cs-007",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Timekeeping",
    moduleColor: "indigo",
    caseStudyTitle: "Union Pay Rules",
    roadmap: {
      problem: {
        short: "Multiple union rules were manually calculated, leading to payroll escalations.",
        full: "The organization operates with multiple unions, each with complex rules for double-time, meal penalties, and shift differentials. The legacy system couldn't handle this logic, forcing payroll to use calculators and spreadsheets.",
        icon: "FileWarning"
      },
      action: {
        short: "Conducted detailed pay-rule mapping workshops; built and tested advanced rules.",
        full: "We deconstructed every Collective Bargaining Agreement (CBA). We mapped logic trees for scenarios like 'Working a 7th consecutive day' or 'Call-back pay within 8 hours of a shift'.",
        icon: "GitMerge"
      },
      solution: {
        short: "Implemented Advanced Pay Rules including shift premiums, union OT, and weekend differentials.",
        full: "We programmed the UKG rules engine to handle all identified scenarios automatically. We utilized 'Work Rule Transfers' to handle employees moving between different union jurisdictions temporarily.",
        icon: "Settings"
      },
      result: {
        short: "Automated 90% of manual calculations, drastically reducing payroll overhead.",
        full: "90% of manual interventions were eliminated. Payroll trust was restored as union grievances regarding pay errors dropped to near zero. The system now acts as the impartial arbiter of the union contract.",
        icon: "Trophy"
      }
    },
    metrics: [
      { label: "Manual Calcs", value: "-90%", type: "percentage", impact: "time", icon: "Calculator" },
      { label: "Union Grievances", value: "Reduced", type: "qualitative", impact: "cost", icon: "ThumbsUp" },
      { label: "Compliance", value: "100%", type: "count", impact: "accuracy", icon: "ShieldCheck" }
    ],
    deepDive: {
      challengeSection: "Union environments are high-stakes. A single miscalculation can lead to a grievance, a lawsuit, or a strike. The client's manual workaround was a ticking time bomb of compliance risk and administrative burnout.",
      approachSection: "We engaged union stewards in the validation process. By showing them the logic diagrams of how the system would calculate pay, we gained their buy-in. We ran 'Gross-to-Net' comparison tests for 4 pay cycles.",
      technicalSection: "We utilized UKG's 'Combination Rules' and 'PCD (Pay Code Distribution)' logic to handle complex stacking of premiums. We built custom counters to track consecutive days worked.",
      impactSection: "The automation didn't just save time; it improved labor relations. The transparency of the rule calculations meant employees could see exactly why they were paid what they were paid, building trust between the floor and the back office."
    },
    relatedBy: {
      sameModule: ["global-bpo-el-salvador-timekeeping", "global-bpo-mexico-pay-codes"],
      sameCountry: ["manufacturing-usa-mobile-geofencing", "manufacturing-usa-transfers"],
      sameCompany: ["manufacturing-usa-mobile-geofencing", "manufacturing-usa-transfers"]
    },
    seoTitle: "Union Pay Rule Automation Case Study | Manufacturing | UKG",
    seoDescription: "See how a heavy equipment manufacturer automated 90% of complex union pay calculations with UKG Timekeeping.",
    keywords: ["Union Pay Rules", "UKG Timekeeping", "Manufacturing Payroll", "CBA Compliance", "Shift Differentials"],
    publishedDate: "2025-01-21",
    featured: true,
    difficulty: "High"
  },

  // 8. Komatsu - Transfers (USA)
  {
    slug: "manufacturing-usa-transfers",
    id: "cs-008",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Timekeeping",
    moduleColor: "indigo",
    caseStudyTitle: "Cost Center Transfers",
    roadmap: {
      problem: {
        short: "Employees frequently changed job roles/cost centers; legacy system couldn't track accurately.",
        full: "In a dynamic manufacturing floor, workers move between lines and projects daily. The old system couldn't easily track these movements, leading to all costs being dumped into a 'General' bucket, distorting product margin analysis.",
        icon: "Shuffle"
      },
      action: {
        short: "Analyzed operational workflows and defined labor-transfer structure.",
        full: "We mapped the 7-level General Ledger structure to UKG's labor levels. We defined which levels were 'employee-driven' (selectable at the clock) and which were 'schedule-driven'.",
        icon: "Map"
      },
      solution: {
        short: "Implemented Labor Level Transfers with job costing and validations.",
        full: "We configured the time clocks to prompt employees for 'Job' and 'Department' when they punched in. We implemented 'Validation Lists' to ensure they could only select active, valid charge codes.",
        icon: "CheckCircle"
      },
      result: {
        short: "Achieved accurate cost allocation, improving financial reporting integrity.",
        full: "Finance now has a granular view of labor costs by project and product line. This data accuracy enabled better pricing strategies and margin analysis for the business.",
        icon: "PieChart"
      }
    },
    metrics: [
      { label: "Cost Allocation", value: "Accurate", type: "qualitative", impact: "accuracy", icon: "Target" },
      { label: "Reporting Integrity", value: "Improved", type: "qualitative", impact: "adoption", icon: "FileText" },
      { label: "Margin Visibility", value: "100%", type: "count", impact: "cost", icon: "Eye" }
    ],
    deepDive: {
      challengeSection: "You can't manage what you can't measure. The organization knew their total labor cost, but not the cost per unit or per project. This lack of granularity made it impossible to identify which product lines were actually profitable.",
      approachSection: "We collaborated deeply with the Finance Controller to ensure that the data coming out of UKG would flow seamlessly into their ERP General Ledger. We cleaned up thousands of defunct cost center codes.",
      technicalSection: "We used UKG's 'Labor Level Transfer' functionality. We configured smart-search on the clocks so employees didn't have to scroll through 500 codes—they only saw the 10 relevant to their department.",
      impactSection: "The data unlocked strategic insights. Management identified that a specific product line was bleeding money due to excessive labor hours. The system turned WFM from a payroll tool into a business intelligence source."
    },
    relatedBy: {
      sameModule: ["manufacturing-usa-timekeeping-rules", "global-bpo-columbia-timekeeping"],
      sameCountry: ["manufacturing-usa-mobile-geofencing", "manufacturing-usa-work-orders"],
      sameCompany: ["manufacturing-usa-work-orders", "manufacturing-usa-scheduling"]
    },
    seoTitle: "Labor Cost Allocation Case Study | Manufacturing USA | UKG Transfers",
    seoDescription: "A large heavy equipment manufacturer achieved 100% accurate labor cost allocation by implementing Labor Level Transfers in UKG.",
    keywords: ["Job Costing", "Labor Transfers", "UKG Timekeeping", "Cost Allocation", "Manufacturing Finance"],
    publishedDate: "2025-01-22",
    featured: false,
    difficulty: "Medium"
  },

  // 9. Foundever - Manager Workflow (Costa Rica)
  {
    slug: "global-bpo-costa-rica-workflows",
    id: "cs-009",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Costa Rica",
    industry: "BPO/Staffing",
    companySize: "5,000+ employees",
    projectType: "Implementation",
    moduleName: "Timekeeping",
    moduleColor: "indigo",
    caseStudyTitle: "Approval Workflows",
    roadmap: {
      problem: {
        short: "Payroll approvals were delayed due to lack of structured review workflow.",
        full: "Supervisors were approving time via email or verbal confirmation. Payroll had to chase down approvals manually, creating a frantic bottleneck every pay period close.",
        icon: "Clock"
      },
      action: {
        short: "Designed approval hierarchy & configured exception-based reviews.",
        full: "We mapped the organizational hierarchy to approval levels. We defined a 'management by exception' philosophy—managers only need to touch timecards with issues.",
        icon: "GitPullRequest"
      },
      solution: {
        short: "Implemented Manager Timecard Approval Workflow with real-time notifications.",
        full: "We configured a multi-tier approval workflow in UKG. Supervisors review daily; Operations Managers review weekly. Automated email reminders nudge managers who haven't approved by the deadline.",
        icon: "CheckSquare"
      },
      result: {
        short: "Payroll cycle time reduced by 1 full day each period.",
        full: "The disciplined workflow reduced the payroll close cycle by 24 hours. Accountability improved as the system logged exactly when and by whom a timecard was approved.",
        icon: "Calendar"
      }
    },
    metrics: [
      { label: "Cycle Reduction", value: "1 Day", type: "time", impact: "time", icon: "Clock" },
      { label: "Approval Compliance", value: "100%", type: "count", impact: "accuracy", icon: "CheckCircle" },
      { label: "Admin Churn", value: "Reduced", type: "qualitative", impact: "cost", icon: "Smile" }
    ],
    deepDive: {
      challengeSection: "In a BPO with thousands of employees, a 10% unapproved timecard rate means hundreds of paychecks at risk. The manual 'chase down' method was unsustainable and caused immense stress for the payroll team.",
      approachSection: "We focused on 'Supervisor Enablement.' We simplified the approval view, creating custom views that highlighted only the problem areas so managers could act fast.",
      technicalSection: "We utilized UKG's Workflow Notification engine. We set up 'escalation' rules—if a Supervisor doesn't approve by a certain deadline, their Manager gets a notification. This created an accountability loop.",
      impactSection: "Payroll became highly structured and predictable. The frantic crunch time vanished. The audit trail also protected the company, providing proof of manager sign-off for every hour paid."
    },
    relatedBy: {
      sameModule: ["global-bpo-el-salvador-timekeeping", "global-bpo-mexico-pay-codes"],
      sameCountry: ["global-bpo-costa-rica-accruals", "global-bpo-costa-rica-sso"],
      sameCompany: ["global-bpo-costa-rica-accruals", "global-bpo-mexico-accruals"]
    },
    seoTitle: "Payroll Workflow Automation Case Study | Global BPO | UKG",
    seoDescription: "A global BPO reduced payroll cycle time by 24 hours by implementing automated Manager Approval Workflows in UKG Timekeeping.",
    keywords: ["Payroll Workflows", "Manager Approvals", "UKG Timekeeping", "Process Optimization", "BPO WFM"],
    publishedDate: "2025-01-23",
    featured: false,
    difficulty: "Low"
  },

  // 10. FWF - Migration (Canada)
  {
    slug: "food-processing-canada-migration",
    id: "cs-010",
    companyName: "Canadian Federal Fish Processing & Marketing Enterprise",
    country: "Canada",
    industry: "Manufacturing/Food",
    companySize: "500-1000 employees",
    projectType: "Migration",
    moduleName: "Migration",
    moduleColor: "slate",
    caseStudyTitle: "WFC to Pro WFM Migration",
    roadmap: {
      problem: {
        short: "Outdated legacy system lacked scalability and modern UX.",
        full: "The organization was running on an end-of-life version of legacy Kronos Workforce Central. The infrastructure was unstable, UI was breaking, and they couldn't access modern features like analytics or mobile.",
        icon: "ServerCrash"
      },
      action: {
        short: "Performe discovery, mapping, data migration, and parallel testing.",
        full: "We conducted a 'Lift & Optimize' assessment. We didn't just move data; we cleaned it. We mapped legacy pay codes to the modern architecture and identified 30% of rules that were obsolete.",
        icon: "RefreshCw"
      },
      solution: {
        short: "Delivered complete UKG Pro WFM migration including history, pay codes, jobs & policies.",
        full: "We executed the migration using automated tools to move configuration. We manually rebuilt complex interfaces to use modern APIs and migrated 2 years of history for compliance.",
        icon: "Cloud"
      },
      result: {
        short: "Successful zero-disruption cutover with modernized platform.",
        full: "The project went live with zero payroll disruption. System uptime improved significantly. The modern UI reduced training time for new hires by 50%.",
        icon: "Rocket"
      }
    },
    metrics: [
      { label: "Downtime", value: "0", type: "count", impact: "accuracy", icon: "CheckCircle" },
      { label: "Uptime", value: "99.99%", type: "percentage", impact: "time", icon: "Server" },
      { label: "Training Time", value: "-50%", type: "percentage", impact: "adoption", icon: "Users" }
    ],
    deepDive: {
      challengeSection: "Migration is a complex procedure. The organization feared 'breaking payroll' during the transition. They also had years of 'technical debt'—patches and workarounds in the legacy system that were undocumented.",
      approachSection: "We used a 'Parallel' testing strategy, running both systems side-by-side for 2 full pay cycles. We compared the Gross-to-Net results to the penny until the variance was $0.00.",
      technicalSection: "We utilized specialized data loading tools and custom SQL extractors to pull data. We re-architected the integration layer, moving from flat files to modern API connectors.",
      impactSection: "The move to the cloud removed the IT burden of server maintenance. The new platform enabled them to launch advanced analytics and mobile features, driving further value for the enterprise."
    },
    relatedBy: {
      sameModule: [],
      sameCountry: ["food-processing-canada-analytics"],
      sameCompany: ["food-processing-canada-analytics"]
    },
    seoTitle: "Legacy to UKG Pro Migration Case Study | Food Processing Canada",
    seoDescription: "See how a Canadian fish processing enterprise successfully migrated to UKG Pro WFM with zero payroll disruption.",
    keywords: ["UKG Migration", "Workforce Central", "Pro WFM", "Cloud Migration", "Kronos Upgrade"],
    publishedDate: "2025-01-24",
    featured: true,
    difficulty: "High"
  },

  // 11. Foundever - Accruals (Mexico)
  {
    slug: "global-bpo-mexico-accruals",
    id: "cs-011",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Mexico",
    industry: "BPO/Staffing",
    companySize: "5,000+ employees",
    projectType: "Implementation",
    moduleName: "Accruals",
    moduleColor: "purple",
    caseStudyTitle: "Time-Off Management",
    roadmap: {
      problem: {
        short: "Employees frequently submitted untracked leave requests leading to staffing shortages.",
        full: "Paper forms and email requests meant HR often missed recording leave. This resulted in unexpected absences on the floor and employees taking more leave than they had accrued.",
        icon: "FileMinus"
      },
      action: {
        short: "Formalized leave workflows and configured approval routes.",
        full: "We designed a digital request process. We mandated that all leave must be requested in advance and routed to the correct supervisor automatically.",
        icon: "GitBranch"
      },
      solution: {
        short: "Implemented Time-Off Request Workflow with automated validations.",
        full: "We configured UKG to block requests if the employee had insufficient balance or if the department had already hit its 'Time Off Limit' for that day.",
        icon: "Shield"
      },
      result: {
        short: "Improved leave visibility by 100%, reduced unapproved absences by 35%.",
        full: "Unapproved absences dropped by 35%. Managers gained a calendar view of who was off, allowing for proactive staffing. Accrual liability reports became accurate instantly.",
        icon: "Calendar"
      }
    },
    metrics: [
      { label: "Leave Visibility", value: "100%", type: "count", impact: "accuracy", icon: "Eye" },
      { label: "Unapproved Absence", value: "-35%", type: "percentage", impact: "cost", icon: "UserMinus" },
      { label: "Process Compliance", value: "High", type: "qualitative", impact: "adoption", icon: "CheckCircle" }
    ],
    deepDive: {
      challengeSection: "In a BPO call center, seat occupancy directly impacts revenue. Unplanned absence was hitting margins. The organization's Mexico division was losing billable hours because they lacked visibility into planned time-off.",
      approachSection: "We implemented a quota system, defining how many agents could be off per day per campaign. The system now auto-denies requests that exceed this cap.",
      technicalSection: "We configured request subtypes for different leave categories and enabled cascading balance logic. We set up mobile notifications for real-time approval status.",
      impactSection: "The system brought order to chaos. Agents appreciated the instant feedback, and operations could finally rely on the schedule. Revenue leakage due to understaffing was significantly plugged."
    },
    relatedBy: {
      sameModule: ["global-bpo-costa-rica-accruals", "global-bpo-columbia-accruals"],
      sameCountry: ["global-bpo-mexico-pay-codes", "global-bpo-mexico-attestation"],
      sameCompany: ["global-bpo-mexico-pay-codes", "global-bpo-columbia-accruals"]
    },
    seoTitle: "Time-Off Request Automation Case Study | Global BPO Mexico | UKG",
    seoDescription: "A global BPO leader reduced unapproved absences by 35% and improved staffing reliability in Mexico with UKG Time-Off Management.",
    keywords: ["Leave Management", "Absence Automation", "UKG Accruals", "BPO WFM", "Mexico Payroll"],
    publishedDate: "2025-01-25",
    featured: false,
    difficulty: "Medium"
  },

  // 12. Foundever - Pay Codes (Mexico)
  {
    slug: "global-bpo-mexico-pay-codes",
    id: "cs-012",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Mexico",
    industry: "BPO/Staffing",
    companySize: "5,000+ employees",
    projectType: "Implementation",
    moduleName: "Timekeeping",
    moduleColor: "indigo",
    caseStudyTitle: "Pay Code Standardization",
    roadmap: {
      problem: {
        short: "Each location maintained separate pay codes, causing payroll effort duplication.",
        full: "Regional sites used different codes for identical tasks. Consolidating reports was a manual nightmare, and configuration changes had to be repeated for every site.",
        icon: "Copy"
      },
      action: {
        short: "Conducted pay code rationalization workshops.",
        full: "We audited 200+ active pay codes and identified duplicates. We proposed a single, unified naming convention and logic structure for the entire region.",
        icon: "Filter"
      },
      solution: {
        short: "Delivered Unified Pay Code Structure across all regions.",
        full: "We rebuilt the pay configuration to use a global set of codes. We used Pay Code Profiles to hide irrelevant codes locally, while maintaining standardized backend data.",
        icon: "Layers"
      },
      result: {
        short: "Reduced payroll configuration complexity by 60%.",
        full: "The number of active pay codes dropped from 200 to 80. Reporting became seamless across sites, and national policy changes can now be deployed in minutes.",
        icon: "Minimize"
      }
    },
    metrics: [
      { label: "Complexity", value: "-60%", type: "percentage", impact: "time", icon: "Minimize2" },
      { label: "Reporting", value: "Unified", type: "qualitative", impact: "accuracy", icon: "FileText" },
      { label: "Maintenance", value: "Low", type: "qualitative", impact: "cost", icon: "Tool" }
    ],
    deepDive: {
      challengeSection: "The organization grew through acquisition, leading to a fragmented system landscape. Lack of standardization meant HQ couldn't compare labor costs between sites accurately, doubling the maintenance effort.",
      approachSection: "We acted as the governance team, establishing a 'Golden Record' for pay codes that mapped clearly to the General Ledger across all divisions.",
      technicalSection: "We utilized UKG's Pay Code Groups for reporting consolidation and used mass-update tools to transition employee profiles to the new structure without disruption.",
      impactSection: "Standardization is the foundation of scale. Now, when the organization opens a new site in the region, they simply apply the national standard template. The architecture is ready for rapid growth."
    },
    relatedBy: {
      sameModule: ["global-bpo-el-salvador-timekeeping", "manufacturing-usa-timekeeping-rules"],
      sameCountry: ["global-bpo-mexico-accruals", "global-bpo-mexico-attestation"],
      sameCompany: ["global-bpo-mexico-accruals", "global-bpo-mexico-attestation"]
    },
    seoTitle: "Pay Code Standardization Case Study | Global BPO | UKG",
    seoDescription: "A global BPO leader reduced configuration complexity by 60% by standardizing pay codes across multiple international sites.",
    keywords: ["Pay Code Standardization", "WFM Governance", "UKG Configuration", "Payroll Consolidation", "Mexico WFM"],
    publishedDate: "2025-01-26",
    featured: false,
    difficulty: "Medium"
  },

  // 13. Foundever - Attestation (Mexico)
  {
    slug: "global-bpo-mexico-attestation",
    id: "cs-013",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Mexico",
    industry: "BPO/Staffing",
    companySize: "5,000+ employees",
    projectType: "Implementation",
    moduleName: "Attestation",
    moduleColor: "violet",
    caseStudyTitle: "Meal & Break Compliance",
    roadmap: {
      problem: {
        short: "Client faced audit risks due to missing meal-break confirmations.",
        full: "Local labor law is strict about breaks. The organization had no proof that employees were taking their mandated rest, exposing them to significant legal liability.",
        icon: "Gavel"
      },
      action: {
        short: "Analyzed compliance laws; created attestation prompts.",
        full: "We worked with legal counsel to draft specific attestation questions. We designed the flow to interrupt the clock-out process to ensure confirmation.",
        icon: "MessageSquare"
      },
      solution: {
        short: "Implemented Meal & Break Attestation at clock-in/out.",
        full: "We configured the Attestation workflow. If an employee answers 'No', the system forces a reason selection and instantly alerts management to investigate.",
        icon: "CheckCircle2"
      },
      result: {
        short: "Achieved 95% compliance and reduced legal risk significantly.",
        full: "Compliance documentation reached 95%. The organization now has a digital paper trail for every shift, protecting them in potential labor disputes.",
        icon: "ShieldCheck"
      }
    },
    metrics: [
      { label: "Compliance Rate", value: "95%", type: "percentage", impact: "accuracy", icon: "CheckCircle" },
      { label: "Legal Risk", value: "Minimized", type: "qualitative", impact: "cost", icon: "Shield" },
      { label: "Audit Readiness", value: "100%", type: "count", impact: "accuracy", icon: "FileText" }
    ],
    deepDive: {
      challengeSection: "Proving compliance is essential in strict regulatory environments. The organization needed an irrefutable, employee-verified record of rest periods to operate safely and avoid labor fines.",
      approachSection: "We focused on a seamless user experience, ensuring the attestation prompt was clear and quick so as not to cause congestion at the time clocks during shift ends.",
      technicalSection: "We used specialized attestation tools to trigger the dialogue on specific punch types and built real-time dashboards for HR to monitor non-compliance flags.",
      impactSection: "Risk mitigation is a major ROI driver. This project provided total peace of mind to the legal and executive teams, ensuring all labor dispute documentation is automated and defensible."
    },
    relatedBy: {
      sameModule: [],
      sameCountry: ["global-bpo-mexico-accruals", "global-bpo-mexico-pay-codes"],
      sameCompany: ["global-bpo-mexico-accruals", "global-bpo-mexico-pay-codes"]
    },
    seoTitle: "Labor Compliance Attestation Case Study | Global BPO | UKG",
    seoDescription: "A global BPO achieved 95% meal break compliance and minimized legal risk by implementing UKG Attestation workflows.",
    keywords: ["UKG Attestation", "Labor Compliance", "Meal Break Laws", "Mexico Labor Law", "Risk Mitigation"],
    publishedDate: "2025-01-27",
    featured: false,
    difficulty: "Medium"
  },

  // 14. Foundever - Timekeeping (Columbia)
  {
    slug: "global-bpo-columbia-timekeeping",
    id: "cs-014",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Columbia",
    industry: "BPO/Staffing",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Timekeeping",
    moduleColor: "indigo",
    caseStudyTitle: "Exception Alerts",
    roadmap: {
      problem: {
        short: "Payroll team spent hours scanning for errors manually.",
        full: "The payroll team relied on manual checks for missing punches or long shifts. This process was slow and frequently missed significant errors.",
        icon: "Search"
      },
      action: {
        short: "Identified common issues and built exception alerts.",
        full: "We analyzed historical payroll adjustments to identify recurring issues like missing punches and unapproved overtime to build automated detection logic.",
        icon: "Bell"
      },
      solution: {
        short: "Implemented Automated Payroll Exceptions for OT, missing punches, invalid transfers.",
        full: "We configured UKG to automatically flag these events and built dedicated views that narrowed down thousands of records to only those requiring attention.",
        icon: "Flag"
      },
      result: {
        short: "Saved 8+ hours per pay cycle.",
        full: "Automated error detection saved the payroll team a full work day every cycle. It shifted the responsibility of data integrity to department supervisors.",
        icon: "Clock"
      }
    },
    metrics: [
      { label: "Time Saved", value: "8+ Hrs", type: "time", impact: "time", icon: "Clock" },
      { label: "Error Detection", value: "Automated", type: "qualitative", impact: "accuracy", icon: "Zap" },
      { label: "Process Efficiency", value: "High", type: "qualitative", impact: "cost", icon: "TrendingUp" }
    ],
    deepDive: {
      challengeSection: "In a high-volume BPO environment, manual data cleaning at the end of the pay period is a massive bottleneck. The payroll team was acting as data janitors rather than strategic auditors.",
      approachSection: "We adopted a 'clean-as-you-go' philosophy, training supervisors to use exception widgets daily to address issues in real-time before they reached the payroll stage.",
      technicalSection: "We configured exception severities and customized the pay period close process to prevent finalization until all critical exceptions were resolved.",
      impactSection: "The efficiency gain was immediate, but the cultural shift was more impactful. Operations managers now own their labor data, improving accountability across the organization."
    },
    relatedBy: {
      sameModule: ["global-bpo-el-salvador-timekeeping", "manufacturing-usa-timekeeping-rules"],
      sameCountry: ["global-bpo-columbia-accruals"],
      sameCompany: ["global-bpo-columbia-accruals", "global-bpo-mexico-pay-codes"]
    },
    seoTitle: "Payroll Exception Automation Case Study | Global BPO | UKG",
    seoDescription: "A global BPO leader saved 8+ hours per pay cycle by implementing automated UKG Timekeeping exception alerts.",
    keywords: ["Payroll Automation", "Exception Management", "UKG Timekeeping", "Columbia Payroll", "Efficiency"],
    publishedDate: "2025-01-28",
    featured: false,
    difficulty: "Low"
  },

  // 15. Foundever - Accruals (Columbia)
  {
    slug: "global-bpo-columbia-accruals",
    id: "cs-015",
    companyName: "Global Customer Experience & BPO Outsourcing Leader",
    country: "Columbia",
    industry: "BPO/Staffing",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Accruals",
    moduleColor: "purple",
    caseStudyTitle: "Holiday Planning",
    roadmap: {
      problem: {
        short: "Managing different regional holidays caused payroll & accrual issues.",
        full: "Managing eligibility and holiday premiums for a large workforce across 18 public holidays was a major administrative burden prone to frequent errors.",
        icon: "Calendar"
      },
      action: {
        short: "Gathered holiday calendars; normalized rules.",
        full: "We mapped the regional holiday calendars and defined eligibility rules for substitute days and premium pay, translating legal requirements into system logic.",
        icon: "Map"
      },
      solution: {
        short: "Implemented Automated Holiday Policies.",
        full: "We configured Holiday Profiles that automatically credit holiday pay or generate accrual balances based on actual work performed on those days.",
        icon: "Gift"
      },
      result: {
        short: "Eliminated holiday calculation errors entirely.",
        full: "Holiday payroll is now 100% automated. Manual tracking of compensatory days has been eliminated, and compliance with local labor law is guaranteed.",
        icon: "CheckCircle"
      }
    },
    metrics: [
      { label: "Calculation Errors", value: "0", type: "count", impact: "accuracy", icon: "CheckCircle" },
      { label: "Admin Effort", value: "Eliminated", type: "qualitative", impact: "time", icon: "Trash2" },
      { label: "Compliance", value: "100%", type: "count", impact: "accuracy", icon: "Shield" }
    ],
    deepDive: {
      challengeSection: "Local holiday pay requirements are complex and strict. The organization was struggling with 'compensatory days'—manual tracking led to errors that frustrated employees and risked compliance violations.",
      approachSection: "We automated the entire logic flow, ensuring the system act as the source of truth for all holiday-related premiums and accruals based on actual punch data.",
      technicalSection: "We utilized UKG's holiday credit and accrual grant engines, setting up automated expiration rules for earned compensatory time.",
      impactSection: "Automation brought total fairness and accuracy to the process. Every employee is treated according to the law without human bias or error, removing a recurring monthly headache for the payroll team."
    },
    relatedBy: {
      sameModule: ["global-bpo-mexico-accruals", "global-bpo-costa-rica-accruals"],
      sameCountry: ["global-bpo-columbia-timekeeping"],
      sameCompany: ["global-bpo-columbia-timekeeping", "global-bpo-mexico-accruals"]
    },
    seoTitle: "Holiday Pay Automation Case Study | Global BPO | UKG",
    seoDescription: "A global BPO leader eliminated holiday calculation errors by automating regional holiday pay and accrual logic in UKG.",
    keywords: ["Holiday Pay", "Compensatory Time", "UKG Accruals", "Columbia Labor Law", "Payroll Automation"],
    publishedDate: "2025-01-29",
    featured: false,
    difficulty: "Medium"
  },

  // 16. Komatsu - Work Orders (USA)
  {
    slug: "manufacturing-usa-work-orders",
    id: "cs-016",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Timekeeping",
    moduleColor: "indigo",
    caseStudyTitle: "Work Order Integration",
    roadmap: {
      problem: {
        short: "Production managers could not reconcile work order completion with employee time.",
        full: "Employees clocked in for the day, but there was no visibility into time spent on specific manufacturing orders, making true labor costing impossible.",
        icon: "HelpCircle"
      },
      action: {
        short: "Integrated ERP work order codes with Activities in UKG.",
        full: "We built an interface between the ERP system and UKG, allowing open work orders to be selected by employees directly at the time clocks.",
        icon: "Link"
      },
      solution: {
        short: "Implemented Work Order–Driven Activity Tracking.",
        full: "We deployed UKG Activities to track start/stop times for each order, feeding data back to the ERP for detailed variance analysis.",
        icon: "Activity"
      },
      result: {
        short: "Achieved near-perfect synchronization between labor time and work order progress.",
        full: "The organization now knows exactly how many man-hours go into every machine produced, driving better pricing and production planning.",
        icon: "Target"
      }
    },
    metrics: [
      { label: "Data Sync", value: "Real-time", type: "qualitative", impact: "accuracy", icon: "RefreshCw" },
      { label: "Costing Accuracy", value: "High", type: "qualitative", impact: "cost", icon: "DollarSign" },
      { label: "Prod Visibility", value: "100%", type: "count", impact: "accuracy", icon: "Eye" }
    ],
    deepDive: {
      challengeSection: "Manufacturing efficiency relies on knowing actual vs standard labor costs. The organization lacked the data loop to know when their labor standards were being exceeded, resulting in hidden margin erosion.",
      approachSection: "We used barcode scanners at UKG terminals so employees could switch jobs instantly by scanning badges and work travelers, creating a frictionless shop-floor experience.",
      technicalSection: "We utilized UKG Activities and robust middleware to handle quantity prompts, providing both time and productivity output data back to the core ERP.",
      impactSection: "The feedback loop is now complete. The system integration is the backbone of their continuous improvement initiatives, providing the granular data needed for operational excellence."
    },
    relatedBy: {
      sameModule: ["manufacturing-usa-timekeeping-rules", "global-bpo-el-salvador-timekeeping"],
      sameCountry: ["manufacturing-usa-scheduling", "manufacturing-usa-productivity"],
      sameCompany: ["manufacturing-usa-productivity", "manufacturing-usa-scheduling"]
    },
    seoTitle: "Work Order Integration Case Study | Heavy Manufacturing | UKG",
    seoDescription: "A heavy equipment manufacturer achieved perfect synchronization between labor time and work orders by integrating their ERP with UKG Activities.",
    keywords: ["Work Order Tracking", "Manufacturing WFM", "SAP Integration", "UKG Activities", "Job Costing"],
    publishedDate: "2025-01-30",
    featured: true,
    difficulty: "High"
  },

  // 17. Komatsu - Scheduling (USA)
  {
    slug: "manufacturing-usa-scheduling",
    id: "cs-017",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Scheduling",
    moduleColor: "emerald",
    caseStudyTitle: "Task-Based Scheduling",
    roadmap: {
      problem: {
        short: "Warehouse teams lacked clarity on task assignments, causing delays.",
        full: "Supervisors assigned tasks on whiteboards, leading to confusion and slow starts at the beginning of each shift as employees waited for instructions.",
        icon: "Clipboard"
      },
      action: {
        short: "Conducted workflow mapping and categorized warehouse operations into Activities.",
        full: "We deconstructed warehouse operations into distinct skills and activities, defining productivity standards for each function.",
        icon: "List"
      },
      solution: {
        short: "Implemented Task-Based Activities with labor standards and task tracking.",
        full: "We configured advanced scheduling so managers can schedule specific tasks. Employees now see their exact assignments on their mobile app before starting their shift.",
        icon: "Calendar"
      },
      result: {
        short: "Reduced order fulfillment time by 20% and improved SLA adherence.",
        full: "Start-of-shift confusion was eliminated. By balancing pickers and packers based on volume, throughput increased by 20% while meeting all service level agreements.",
        icon: "Truck"
      }
    },
    metrics: [
      { label: "Fulfillment Speed", value: "20%", type: "percentage", impact: "time", icon: "Zap" },
      { label: "SLA Adherence", value: "Improved", type: "qualitative", impact: "accuracy", icon: "CheckCircle" },
      { label: "Task Clarity", value: "100%", type: "count", impact: "adoption", icon: "List" }
    ],
    deepDive: {
      challengeSection: "Efficient warehouse logistics require a balanced ecosystem. Manual scheduling couldn't account for volume surges, leading to bottlenecks on the shipping docks during peak times.",
      approachSection: "We implemented role-based scheduling, tagging every employee with certified skills to ensure the system only allowed qualified staff to be assigned to critical machinery roles.",
      technicalSection: "We utilized UKG workload planning features to import daily order forecasts and guide staffing levels per task dynamically.",
      impactSection: "Efficiency gains improved customer satisfaction across the board. The morning huddle was replaced by a clear digital plan accessible on any mobile device.",
    },
    relatedBy: {
      sameModule: ["global-bpo-el-salvador-scheduling"],
      sameCountry: ["manufacturing-usa-work-orders", "manufacturing-usa-project-tracking"],
      sameCompany: ["manufacturing-usa-work-orders", "manufacturing-usa-project-tracking"]
    },
    seoTitle: "Warehouse Task Scheduling Case Study | Heavy Manufacturing | UKG",
    seoDescription: "A large manufacturer reduced order fulfillment time by 20% by implementing task-based scheduling in UKG.",
    keywords: ["Warehouse Scheduling", "Task Management", "UKG Advanced Scheduling", "Logistics WFM", "Efficiency"],
    publishedDate: "2025-01-31",
    featured: false,
    difficulty: "Medium"
  },

  // 18. Komatsu - Project Tracking (USA)
  {
    slug: "manufacturing-usa-project-tracking",
    id: "cs-018",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Activities",
    moduleColor: "teal",
    caseStudyTitle: "Project Time Capture",
    roadmap: {
      problem: {
        short: "Billing teams struggled because engineer hours on client projects were not captured.",
        full: "Exempt engineering time was unrecorded. The organization was losing billable R&D hours because they lacked the documentation to substantiate client invoices.",
        icon: "DollarSign"
      },
      action: {
        short: "Designed project-level Activities with cost centers and mapped work categories.",
        full: "We created a project-based timesheet view, mapping internal and external projects to the core project management platform.",
        icon: "Briefcase"
      },
      solution: {
        short: "Implemented Activity-Level Time Capture with manager approvals for project time.",
        full: "We configured UKG for duration-based entry, allowing engineers to allocate their weekly hours to specific projects via mobile or web interfaces.",
        icon: "Clock"
      },
      result: {
        short: "Achieved 100% billable hour accuracy, increasing revenue recognition by 15%.",
        full: "Revenue recognition increased by 15% simply by capturing work already being performed. Invoices are now backed by irrefutable, detailed time logs.",
        icon: "TrendingUp"
      }
    },
    metrics: [
      { label: "Revenue Rec", value: "+15%", type: "percentage", impact: "cost", icon: "TrendingUp" },
      { label: "Billing Accuracy", value: "100%", type: "count", impact: "accuracy", icon: "CheckCircle" },
      { label: "Adoption", value: "High", type: "qualitative", impact: "adoption", icon: "Users" }
    ],
    deepDive: {
      challengeSection: "Capturing time for exempt professional staff is a cultural challenge. However, the organization needed this data to capitalize R&D costs correctly for tax purposes and client billing.",
      approachSection: "We made time entry frictionless with features like 'Previous Week Copy' and focused training on how this data protects engineering budgets and department growth.",
      technicalSection: "We used specialized project time configurations and added attestation requirements for accuracy confirmation before submission, satisfying high-level audit needs.",
      impactSection: "The financial impact was massive—a 15% jump in recognized revenue without additional headcount. It transformed the engineering department's perceived value within the enterprise."
    },
    relatedBy: {
      sameModule: ["manufacturing-usa-productivity"],
      sameCountry: ["manufacturing-usa-scheduling", "manufacturing-usa-productivity"],
      sameCompany: ["manufacturing-usa-productivity", "manufacturing-usa-scheduling"]
    },
    seoTitle: "Engineering Project Time Tracking Case Study | Manufacturing | UKG",
    seoDescription: "A heavy equipment manufacturer increased revenue recognition by 15% by capturing billable engineering hours with UKG Activities.",
    keywords: ["Project Time Tracking", "Billable Hours", "Engineering WFM", "Revenue Recognition", "UKG Activities"],
    publishedDate: "2025-02-01",
    featured: true,
    difficulty: "Medium"
  },

  // 19. Komatsu - Productivity (USA)
  {
    slug: "manufacturing-usa-productivity",
    id: "cs-019",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Activities",
    moduleColor: "teal",
    caseStudyTitle: "Real-Time Productivity",
    roadmap: {
      problem: {
        short: "No visibility into how many units employees produced per hour.",
        full: "Managers knew total plant output but lacked individual performance data, hiding training needs and preventing performance-based rewards.",
        icon: "EyeOff"
      },
      action: {
        short: "Integrated production counters with WFM Activities and configured performance metrics.",
        full: "We linked machine production counters to the specific employee clocked into those stations in the WFM system.",
        icon: "Link"
      },
      solution: {
        short: "Delivered Activity-Based Productivity Tracking with KPIs linked to employee tasks.",
        full: "We deployed UKG Activities with quantity tracking. Real-time dashboards now show units per man-hour by production line and individual operator.",
        icon: "BarChart"
      },
      result: {
        short: "Improved line productivity by 28% and reduced production bottlenecks.",
        full: "Output increased by 28% as teams could see their real-time performance. Management could instantly identify and support lines falling behind targets.",
        icon: "Zap"
      }
    },
    metrics: [
      { label: "Productivity", value: "+28%", type: "percentage", impact: "cost", icon: "TrendingUp" },
      { label: "Bottlenecks", value: "Reduced", type: "qualitative", impact: "time", icon: "Minimize2" },
      { label: "Data Granularity", value: "High", type: "qualitative", impact: "accuracy", icon: "ZoomIn" }
    ],
    deepDive: {
      challengeSection: "The organization wanted to move to a pay-for-performance model but lacked the infrastructure to prove individual output. This data gap was preventing strategic HR innovation.",
      approachSection: "We combined IoT machine data with workforce data, using the employee badge as the link. This required deep collaboration between operational and information technology teams.",
      technicalSection: "We configured UKG to accept real-time quantity data injections and built specialized dashboards for efficiency monitoring at every production level.",
      impactSection: "The data enabled a new performance-based incentive structure that energized the workforce. High performers are now compensated for their excellence, aligning employee goals with company output."
    },
    relatedBy: {
      sameModule: ["manufacturing-usa-project-tracking"],
      sameCountry: ["manufacturing-usa-project-tracking", "manufacturing-usa-attendance"],
      sameCompany: ["manufacturing-usa-project-tracking", "manufacturing-usa-attendance"]
    },
    seoTitle: "Manufacturing Productivity Tracking Case Study | Manufacturing | UKG",
    seoDescription: "A heavy equipment manufacturer improved line productivity by 28% by integrating machine output with UKG Activities.",
    keywords: ["Productivity Tracking", "Manufacturing KPIs", "UKG Activities", "Pay for Performance", "IoT Integration"],
    publishedDate: "2025-02-02",
    featured: true,
    difficulty: "High"
  },

  // 20. Komatsu - Attendance (USA)
  {
    slug: "manufacturing-usa-attendance",
    id: "cs-020",
    companyName: "Large Japanese Heavy Construction Equipment Manufacturer",
    country: "USA",
    industry: "Manufacturing/Heavy",
    companySize: "1000-5000 employees",
    projectType: "Implementation",
    moduleName: "Attendance",
    moduleColor: "rose",
    caseStudyTitle: "Attendance Tracking",
    roadmap: {
      problem: {
        short: "No Visibility to repeated attendance issues for reporting.",
        full: "Attendance tracking was manual and inconsistent across supervisors, leading to significant legal risk and unreliable reporting for HR.",
        icon: "UserX"
      },
      action: {
        short: "Conducted workshop and gathered all the attendance policies.",
        full: "We codified the client's complex points-based attendance policy, defining automated triggers for disciplinary actions.",
        icon: "BookOpen"
      },
      solution: {
        short: "Delivered Automated Attendance Tracking.",
        full: "We configured the attendance module to automatically assign points based on punch data and generate warning documents when thresholds are reached.",
        icon: "FileText"
      },
      result: {
        short: "Eliminated manual effort for attendance tracking.",
        full: "Policy enforcement is now automated and consistent across all shifts. Administrative tracking time was reduced to zero, protecting the organization from legal grievances.",
        icon: "Shield"
      }
    },
    metrics: [
      { label: "Manual Tracking", value: "Eliminated", type: "qualitative", impact: "time", icon: "Trash2" },
      { label: "Policy Consistency", value: "100%", type: "count", impact: "accuracy", icon: "Scale" },
      { label: "Legal Risk", value: "Reduced", type: "qualitative", impact: "cost", icon: "ShieldCheck" }
    ],
    deepDive: {
      challengeSection: "Inconsistency in policy enforcement is a major legal liability. The organization's manual tracking made uniform discipline impossible across hundreds of employees and multiple sites.",
      approachSection: "We automated the scorekeeping, making the system an impartial judge. Supervisors still have the discretion to excuse absences, but all overrides now require an audited reason.",
      technicalSection: "We used attendance profiles with automated rolling-period expiration rules and set up document generation to handle warning letter population with infraction details.",
      impactSection: "The company culture became fairer and more transparent. Employees can now track their own status on the mobile app, shifting the focus from disputes to reliability improvements."
    },
    relatedBy: {
      sameModule: [],
      sameCountry: ["manufacturing-usa-productivity", "manufacturing-usa-mobile-geofencing"],
      sameCompany: ["manufacturing-usa-productivity", "manufacturing-usa-mobile-geofencing"]
    },
    seoTitle: "Automated Attendance Policy Case Study | Manufacturing | UKG",
    seoDescription: "A large heavy equipment manufacturer eliminated manual attendance tracking and improved consistency by implementing UKG Attendance automation.",
    keywords: ["Attendance Points", "UKG Attendance", "HR Compliance", "Automated Discipline", "Manufacturing HR"],
    publishedDate: "2025-02-03",
    featured: false,
    difficulty: "Medium"
  }
];

export const getRelatedStudies = (currentId: string, module: string): CaseStudy[] => {
  return ALL_CASE_STUDIES
    .filter(s => s.id !== currentId && s.moduleName === module)
    .slice(0, 3);
};