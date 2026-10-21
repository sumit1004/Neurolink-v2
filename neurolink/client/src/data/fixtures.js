export const patient = { name: 'Margaret Ellis', initials: 'ME', status: 'At home', updated: '12 min ago' }

export const modules = [
  ['Overview', 'overview'], ['People', 'people'], ['Health records', 'health-records'], ['Smartwatch', 'smartwatch'],
  ['Routines', 'routines'], ['Location & safety', 'location'], ['Conversations', 'conversations'], ['Daily recap', 'daily-recap'],
  ['Reports', 'reports'], ['Alerts', 'alerts'], ['Doctors', 'doctors'], ['Settings', 'settings'],
]

export const pageInfo = {
  people: { title: 'People directory', description: 'Known people who may be recognized during interactions.', action: 'Add known person', rows: [['David Ellis', 'Son', 'Verified', 'Reviewed today'], ['Ana Torres', 'Neighbour', 'Pending review', 'Yesterday'], ['Dr. Mina Shah', 'Primary care', 'Verified', '18 Oct']] },
  'health-records': { title: 'Health records', description: 'Private documents and clinical notes for Margaret.', action: 'Upload record', rows: [['Medication list', 'Care plan', '18 Oct 2026', 'Available'], ['Annual wellness visit', 'Report', '03 Oct 2026', 'Available'], ['Blood work', 'Lab result', '12 Sep 2026', 'Available']] },
  smartwatch: { title: 'Smartwatch health', description: 'Device and health information appear only when securely received from an authorized device.', action: 'Register device', rows: [['Connection', 'No device connected', '—', 'Setup needed'], ['Latest reading', 'No readings received', '—', 'No data'], ['Device events', 'No events received', '—', 'No data']] },
  routines: { title: 'Routines & tasks', description: 'A simple, shared view of supportive daily routines.', action: 'Create routine', rows: [['Morning medication', 'Medicine', '8:30 AM daily', 'Scheduled'], ['Lunch check-in', 'Meal', '12:30 PM daily', 'Scheduled'], ['Afternoon walk', 'Activity', '4:30 PM daily', 'Scheduled']] },
  location: { title: 'Location & safety', description: 'Location is shown only when an authorized device provides an update.', action: 'Set home location', rows: [['Latest location', 'Not available', '—', 'Awaiting device'], ['Safe zone', 'Not configured', '—', 'Setup needed'], ['Location history', 'No authorized updates', '—', 'Empty']] },
  conversations: { title: 'Conversations', description: 'Review consented interactions and their processing status.', action: 'Add interaction', rows: [['No conversations yet', 'New recordings will appear here', '—', 'Empty']] },
  'daily-recap': { title: 'Daily recap', description: 'Evidence-grounded AI recaps will be generated only from authorized records.', action: 'Generate recap', rows: [['22 Oct 2026', 'No recap generated', 'No source records available', 'Not ready'], ['21 Oct 2026', 'No recap generated', 'No source records available', 'Not ready']] },
  reports: { title: 'Reports', description: 'Review trends only when validated source data is available.', action: 'Export report', rows: [['Recognition evaluation', 'No verified attempts', 'Last 7 days', 'No data'], ['Routine completion', 'No completions recorded', 'Last 7 days', 'No data'], ['Alerts', 'No alerts recorded', 'Last 7 days', 'No data']] },
  alerts: { title: 'Alerts', description: 'Safety alerts and their resolution workflow live here.', action: 'Configure alerts', rows: [['No unresolved alerts', 'New alerts will appear here', '—', 'All clear']] },
  doctors: { title: 'Doctor contacts', description: 'A private directory for care-related contacts.', action: 'Add doctor', rows: [['No doctor contacts yet', 'Add a contact to make it available to caregivers.', '—', 'Empty']] },
  settings: { title: 'Patient settings', description: 'Manage access, preferences and sensitive-data controls.', action: 'Save changes', rows: [['Patient profile', 'Margaret Ellis', 'Family access', 'Configured'], ['Notifications', 'No delivery channels configured', '—', 'Setup needed'], ['Data & privacy', 'Retention controls', '—', 'Review']] },
}
