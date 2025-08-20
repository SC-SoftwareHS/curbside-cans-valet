#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to leads file
const leadsPath = path.join(__dirname, '..', 'data', 'leads.json');
const csvPath = path.join(__dirname, '..', 'data', 'leads.csv');

console.log('=================================');
console.log('   CURBSIDE CANS VALET - LEADS  ');
console.log('=================================\n');

try {
  // Check if leads file exists
  if (!fs.existsSync(leadsPath)) {
    console.log('No leads yet! The leads.json file will be created when you get your first customer.\n');
    console.log('File location:', leadsPath);
    process.exit(0);
  }

  // Read and parse leads
  const fileContent = fs.readFileSync(leadsPath, 'utf-8');
  const leads = JSON.parse(fileContent);

  if (leads.length === 0) {
    console.log('No leads yet!\n');
    process.exit(0);
  }

  console.log(`Total leads: ${leads.length}\n`);
  console.log('---------------------------------');
  
  // Display each lead
  leads.forEach((lead, index) => {
    console.log(`\nLead #${index + 1}`);
    console.log(`Date: ${new Date(lead.timestamp).toLocaleString()}`);
    console.log(`Name: ${lead.fullName}`);
    console.log(`Email: ${lead.email}`);
    console.log(`Phone: ${lead.phone || 'Not provided'}`);
    console.log(`Address: ${lead.address}`);
    if (lead.notes) {
      console.log(`Notes: ${lead.notes}`);
    }
    console.log(`Status: ${lead.status}`);
    console.log('---------------------------------');
  });

  console.log('\n\nYou can also view the leads in:');
  console.log(`- JSON format: ${leadsPath}`);
  console.log(`- CSV format: ${csvPath}`);
  console.log('\nTip: Open the CSV file in Excel or Google Sheets for easy viewing!');

} catch (error) {
  console.error('Error reading leads:', error.message);
  process.exit(1);
}