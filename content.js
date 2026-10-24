/* ALL SITE CONTENT LIVES HERE. Edit, add, or delete items, save, refresh the page.
   - Hide one item: add  hidden: true  to it.   - Remove it: delete its { ... } block.
   - Pages and sections: edit the "pages" list near the top (order = order on screen). */
window.SITE = {
  name: "Rizwan Ahmad",
  role: "Systems Administration & Cybersecurity",
  email: "rizwan@rizwansec.io",
  resume: "assets/resume.pdf",   // put your PDF at this path. Set to "" to hide every download button.
  links: {   // placeholders: replace with your real URLs. Add more lines (e.g. tryhackme: "https://...") and they appear automatically.
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/"
  },

  contact: {
    status: "Open to work",
    heading: "Let’s connect",
    text: "Open to junior and associate systems administration, IT support, and cybersecurity opportunities. The fastest way to reach me is email.",
    roles: [   // icons: fonts.google.com/icons
      { icon: "dns", title: "Junior Systems Administrator" },
      { icon: "terminal", title: "Linux Administrator (entry-level)" },
      { icon: "support_agent", title: "IT Support / Help Desk" },
      { icon: "shield", title: "SOC Analyst (Tier 1)" },
      { icon: "security", title: "Junior Cybersecurity Analyst" }
    ],
    arrangements: [
      { icon: "domain", label: "On-site" },
      { icon: "home", label: "Remote" },
      { icon: "home_work", label: "Hybrid" }
    ]
  },

  pages: {   // delete a section name to remove it; reorder lines to reorder. Delete a whole page line to drop the page.
    home:       { label: "Home", sections: ["hero", "expertise", "featured"] },
    projects:   { label: "Projects", title: "Projects", intro: "Lab write-ups, configs, and scripts live on GitHub. Each card links to its repository.", sections: ["projects"] },
    experience: { label: "Experience & Resume", sections: ["summary", "certs", "skills", "experience", "education", "other", "cta"] },
    contact:    { label: "Contact", sections: ["contact", "openTo", "links"] }
  },

  summary: "Cybersecurity graduate (B.A.S., George Mason University) with CompTIA Security+ and A+ certifications and hands-on experience administering a Windows Server and Active Directory environment for a small company, including role-based access control, Group Policy, file shares, and secure remote access. Home lab experience with pfSense, VLANs, VPNs, AWS/Azure, and multiple Linux distributions. Currently pursuing CCNA.",
  hero: {
    summary: "Systems administrator and cybersecurity graduate focused on Linux and Windows infrastructure, identity and access management, and defensive security. I build and break things in my homelab, then document them.",
    tags: ["Linux", "Active Directory", "Networking", "Security+"],
    buttons: [
      { label: "View Projects", to: "projects", icon: "rocket_launch", primary: true },
      { label: "Experience & Resume", to: "experience", icon: "description" }
    ]
  },

  expertise: [   // tone (optional): "green" | "cyan" | "blue" | "red". Leave it out and colors cycle automatically.
    { icon: "dns", tone: "green", label: "SYSADMIN", title: "Systems Administration", text: "Windows Server, Active Directory, Group Policy, role-based access, and virtualization.", skills: ["Active Directory", "GPO", "RBAC", "Hyper-V"] },
    { icon: "terminal", tone: "cyan", label: "LINUX", title: "Linux & Scripting", text: "Hands-on with Debian, Red Hat, and Arch families; permissions, services, and package management.", skills: ["Ubuntu", "Fedora", "Bash", "systemd"] },
    { icon: "security", tone: "blue", label: "SECURITY", title: "Security & Networking", text: "Network fundamentals, segmentation, traffic analysis, and vulnerability scanning in a lab setting.", skills: ["Wireshark", "Nmap", "pfSense", "VLANs"] }
  ],

  projects: [   // url: placeholder GitHub link, replace with each repo. sub = short line under the title. featured: true = shown on Home.
    { label: "AD-LAB", icon: "lan", sub: "Windows Server • Hyper-V", title: "Active Directory Homelab", description: "Multi-part Active Directory build: domain setup, OUs, GPOs, and role-based access.", tags: ["Windows Server", "Hyper-V", "GPO"], url: "https://github.com/", featured: true },
    { label: "PENTEST-LAB", icon: "bug_report", sub: "Kali • Ubuntu target", title: "Penetration Testing Lab", description: "Isolated Kali attacker and Ubuntu target on a private LAN segment for practicing scanning and enumeration.", tags: ["Kali", "Nmap", "Wireshark"], url: "https://github.com/", featured: true },
    { label: "LINUX-01", icon: "terminal", sub: "Debian • Nginx • Samba", title: "Linux Server Labs", description: "CLI-only Debian/Ubuntu VMs running Nginx, Samba, and rsyslog.", tags: ["Debian", "Nginx", "Samba"], status: "Planned", url: "https://github.com/", featured: true }
  ],

  certs: [
    { name: "CompTIA Security+", tone: "green", status: "Active", icon: "verified_user", note: "Expires August 2028", text: "Network security, access control, identity management, threat detection, and risk mitigation." },
    { name: "CompTIA A+", tone: "cyan", status: "Active", icon: "devices", note: "Expires August 2028", text: "Hardware, operating systems, networking fundamentals, virtualization, and endpoint security." },
    { name: "Cisco CCNA", tone: "blue", status: "In Progress", icon: "router", note: "Active study", text: "Enterprise networking, IP connectivity, routing and switching, and subnetting." }
  ],

  skills: [   // each item is ["Skill", "short tag"]. Add or remove lines freely; the tag is optional.
    { title: "Systems & Directory", icon: "lan", tone: "green", items: [["Windows Server", "Core"], ["Windows 10 / 11", "OS Admin"], ["Active Directory", "OUs & Users"], ["Group Policy (GPO)", "Enforcement"], ["RBAC / Least Privilege", "AGDLP & NTFS"], ["Hyper-V", "Virtualization"]] },
    { title: "Linux & Scripting", icon: "terminal", tone: "cyan", items: [["Ubuntu & Mint", "Debian-based"], ["Fedora & Red Hat", "RHEL family"], ["Arch Linux", "Config"], ["Kali & Parrot OS", "Security"], ["Bash Scripting", "Automation"], ["PowerShell", "Admin tasks"]] },
    { title: "Networking", icon: "router", tone: "green", items: [["TCP/IP", "Fundamentals"], ["DNS & DHCP", "Services"], ["VLAN Segmentation", "Isolation"], ["VPN (WireGuard, OpenVPN)", "Remote access"], ["pfSense Firewalls", "Rule config"], ["Remote Desktop (RDP)", "Secure admin"]] },
    { title: "Cloud Infrastructure", icon: "cloud", tone: "blue", items: [["AWS", "Cloud"], ["AWS VPC & Security Groups", "Network"], ["AWS IAM & S3", "Access & storage"], ["Microsoft Azure", "Cloud"], ["Azure VNet & NSGs", "Security rules"], ["Azure Blob Storage", "Data storage"]] },
    { title: "Security & Monitoring", icon: "security", tone: "green", items: [["Wireshark", "Packet analysis"], ["Nmap", "Port scanning"], ["Splunk", "SIEM / logs"], ["OpenVAS", "Vuln scanning"], ["Kali Linux", "Pentesting OS"], ["Network Troubleshooting", "Diagnostics"]] },
    { title: "Hardware", icon: "memory", tone: "cyan", items: [["PC & Workstation Assembly", "Build"], ["Installation & Configuration", "Setup"], ["Hardware Troubleshooting", "Diagnostics"], ["Structured Cabling", "Cable mgmt"], ["OS Installation", "Deployment"], ["Rack Mounting", "Racks"]] }
  ],

  experience: [
    { role: "System Administrator", org: "Planet Tech Inc.", period: "Feb 2024 – Jan 2025",
      bullets: [
        "Set up the company server and deployed an Active Directory domain for a 5-person team.",
        "Created users, security groups, and OUs; applied RBAC with AGDLP and NTFS permissions for least privilege.",
        "Built Group Policy Objects and role-restricted shared drives.",
        "Enabled secure remote access with RDP and VPN.",
        "Resolved DNS, authentication, and network issues on Windows and Linux systems."
      ],
      skills: ["Active Directory", "GPO", "AGDLP & NTFS", "RDP & VPN", "DNS & DHCP"] }
  ],

  education: [
    { degree: "B.A.S. Cybersecurity", school: "George Mason University", date: "Dec 2025", text: "Network defense, enterprise security management, vulnerability assessment, systems administration, and cloud security." },
    { degree: "A.A.S. Cybersecurity", school: "Northern Virginia Community College", date: "Dec 2023", text: "Computer networking, Linux/Windows administration, and IT security baselines." }
  ],

  otherExperience: [   // shown under "Additional Experience"; delete the "other" section name above to hide
    { role: "Security Supervisor", org: "Allied Universal", period: "June 2026 – Present", bullets: ["Oversee security compliance, incident documentation, and supervisory coordination."] },
    { role: "Hospice Aide", org: "Home Helpers Home Care", period: "Feb 2025 – Present", bullets: ["Dependable patient care with strict adherence to privacy protocols."] }
  ],

  cta: { title: "Interested in connecting or reviewing my work?", text: "Open to junior and associate systems administration, IT support, and cybersecurity opportunities." }
};
