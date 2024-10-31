import axios from 'axios';

// UPDATE CALENDAR DATA HERE
// https://airtable.com/appcgw78ivd84I8iC/tblIp6K3y5WInuAoR/viwISFvh98JdPpjo9?blocks=hide

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const TABLE_ID_OCTOBER = process.env.REACT_APP_TABLE_ID_OCTOBER;

console.log(AIRTABLE_API_KEY)
console.log(BASE_ID)
console.log(TABLE_ID_OCTOBER)


export const COHORT_DATE_RANGE_OCTOBER = [
  {
    start: `Nov 5`,
    end: `Dec 3`,
  }
]

export const fetchOctober = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_OCTOBER}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      timeLecture1: record.fields.TimeLecture1,
      timeCoaching1: record.fields.TimeCoaching1,
      rich1: record.fields.RichText1,

      name2: record.fields.Name2,
      timeLecture2: record.fields.TimeLecture2,
      timeCoaching2: record.fields.TimeCoaching2,
      rich2: record.fields.RichText2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};