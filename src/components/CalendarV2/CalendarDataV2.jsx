import axios from 'axios';

// UPDATE CALENDAR DATA HERE
// https://airtable.com/appcgw78ivd84I8iC/tblIp6K3y5WInuAoR/viwISFvh98JdPpjo9?blocks=hide

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;

//// EXAMPLE ////

/// COHORT # START ///
/// COHORT # START ///
/// COHORT # START ///

// const TABLE_ID_COHORT# = process.env.REACT_APP_TABLE_ID_COHORT#;

// export const COHORT#_DATE_RANGE = [
//   {
//     start: `MONTH DAY`,
//     end: `MONTH DAY`,
//   }
// ]

// export const fetchCohort# = async () => {    <------ UPDATE
//   const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT#}`; <----- UPDATE
//   const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

//   try {
//     const response = await axios.get(url, { headers });
//     return response.data.records.map(record => ({
//       week: record.fields.Week,

//       name1: record.fields.Name1,
//       timeLecture1: record.fields.TimeLecture1,
//       timeCoaching1: record.fields.TimeCoaching1,
//       rich1: record.fields.RichText1,

//       name2: record.fields.Name2,
//       timeLecture2: record.fields.TimeLecture2,
//       timeCoaching2: record.fields.TimeCoaching2,
//       rich2: record.fields.RichText2,
      
//     }));
//   } catch (error) {
//     console.error('Error fetching data from Airtable', error);
//     return [];
//   }
// };


/// COHORT # END ///
/// COHORT # END ///
/// COHORT # END ///







/// COHORT 5 START ///
/// COHORT 5 START ///
/// COHORT 5 START ///

const TABLE_ID_COHORT5 = process.env.REACT_APP_TABLE_ID_COHORT5;

export const COHORT5_DATE_RANGE = [
  {
    start: `Feb 18`,
    end: `Mar 13`,
  }
]

export const fetchCohort5 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT5}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      week: record.fields.Week,

      name1: record.fields.Name1,
      rich1: record.fields.RichText1,
      date1: record.fields.DateOutput1,

      watchStart1: record.fields.WatchStart1,
      watchEnd1: record.fields.WatchEnd1,
      coachStart1: record.fields.CoachStart1,
      coachEnd1: record.fields.CoachEnd1,
      

      name2: record.fields.Name2,
      rich2: record.fields.RichText2,
      date2: record.fields.DateOutput2,

      watchStart2: record.fields.WatchStart2,
      watchEnd2: record.fields.WatchEnd2,
      coachStart2: record.fields.CoachStart2,
      coachEnd2: record.fields.CoachEnd2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};


/// COHORT 5 END ///
/// COHORT 5 END ///
/// COHORT 5 END ///






/// COHORT 4 START ///
/// COHORT 4 START ///
/// COHORT 4 START ///

const TABLE_ID_COHORT4 = process.env.REACT_APP_TABLE_ID_COHORT4;

export const COHORT4_DATE_RANGE = [
  {
    start: `Jan 13`,
    end: `Feb 5`,
  }
]

export const fetchCohort4 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT4}`;
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

/// COHORT 4 END ///
/// COHORT 4 END ///
/// COHORT 4 END ///








/// COHORT 3 START ///
/// COHORT 3 START ///
/// COHORT 3 START ///

const TABLE_ID_COHORT3 = process.env.REACT_APP_TABLE_ID_COHORT3;

export const COHORT3_DATE_RANGE = [
  {
    start: `Dec 10`,
    end: `Jan 17`,
  }
]

export const fetchCohort3 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT3}`;
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

/// COHORT 3 END ///
/// COHORT 3 END ///
/// COHORT 3 END ///








/// COHORT 2 START ///
/// COHORT 2 START ///
/// COHORT 2 START ///

const TABLE_ID_COHORT2 = process.env.REACT_APP_TABLE_ID_COHORT2;

export const COHORT2_DATE_RANGE = [
  {
    start: `Nov 18`,
    end: `Dec 19`,
  }
]

export const fetchCohort2 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID_COHORT2}`;
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

/// COHORT 2 END ///
/// COHORT 2 END ///
/// COHORT 2 END ///







/// COHORT 1 START ///
/// COHORT 1 START ///
/// COHORT 1 START ///

const TABLE_ID_OCTOBER = process.env.REACT_APP_TABLE_ID_OCTOBER;

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

/// COHORT 1 END ///
/// COHORT 1 END ///
/// COHORT 1 END ///






/// FORMAT TO LOCAL TIME ///
/// FORMAT TO LOCAL TIME ///
/// FORMAT TO LOCAL TIME ///

export const formatToLocalTime = (dateString, includeTimezone = true, timezone = "America/New_York") => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date";

  let formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    // minute: '2-digit',
    hour12: true,
    timeZone: timezone, // Use selected timezone
    timeZoneName: includeTimezone ? 'short' : undefined
  }).format(date);
  
  // Remove any space (regular or non-breaking) before AM/PM and make it lowercase
  formattedTime = formattedTime
    .replace(/([\dAPap][Mm])([A-Z])/g, "$1 $2") // Ensure space between time and timezone
    // .replace(/[\s\u00A0](\wM)/g, match => match.toLowerCase().trim()); // Make AM/PM lowercase

  return formattedTime;
};




/// TIMEZONE DROPDOWN ///
/// TIMEZONE DROPDOWN ///
/// TIMEZONE DROPDOWN ///

export const timezones = [
  "UTC", // Coordinated Universal Time
  "Africa/Abidjan", // Ivory Coast (GMT)
  "Africa/Accra", // Ghana (GMT)
  "Africa/Addis_Ababa", // East Africa Time (EAT)
  "Africa/Algiers", // Central European Time (CET)
  "Africa/Blantyre", // Central Africa Time (CAT)
  "Africa/Dakar", // Western Africa Time (WAT)
  "Africa/Lagos", // West Africa Time (WAT)
  "America/New_York", // Eastern Time (US & Canada)
  "America/Chicago", // Central Time (US & Canada)
  "America/Denver", // Mountain Time (US & Canada)
  "America/Los_Angeles", // Pacific Time (US & Canada)
  // "America/Phoenix", // Arizona (no DST)
  "America/Anchorage", // Alaska Standard Time
  // "America/Honolulu", // Hawaii-Aleutian Standard Time
  "Europe/London", // Greenwich Mean Time (GMT)
  "Europe/Paris", // Central European Time (CET)
  "Asia/Tokyo", // Japan Standard Time (JST)
  "Asia/Hong_Kong", // Hong Kong Time (HKT)
  "Asia/Singapore", // Singapore Standard Time (SGT)
  "Australia/Sydney", // Australian Eastern Standard Time (AEST)
  "Australia/Perth", // Australian Western Standard Time (AWST)
  // "Asia/Kolkata", // Indian Standard Time (IST)
  "Asia/Karachi", // Pakistan Standard Time (PST)
  "Asia/Seoul", // Korea Standard Time (KST)
  "Asia/Shanghai", // China Standard Time (CST)
  "Africa/Johannesburg", // South Africa Standard Time (SAST)
  "America/Argentina/Buenos_Aires", // Argentina Time (ART)
  "Europe/Moscow", // Moscow Time (MSK)
  "Asia/Dubai", // Gulf Standard Time (GST)
  "Pacific/Auckland", // New Zealand Standard Time (NZST)
];


export const timezoneDropdown = (selectedTimezone, setSelectedTimezone) => {
  return (
    <select 
      value={selectedTimezone} 
      onChange={(e) => setSelectedTimezone(e.target.value)}
    >
      {timezones.map((tz) => (
        <option key={tz} value={tz}>
          {tz}
        </option>
      ))}
    </select>
  );
};



/// TIMEZONE DROPDOWN ///
/// TIMEZONE DROPDOWN ///
/// TIMEZONE DROPDOWN ///