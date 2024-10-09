import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://jkdeeczykhzdqzppnehv.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZGVlY3p5a2h6ZHF6cHBuZWh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODQyNTM0OSwiZXhwIjoyMDQ0MDAxMzQ5fQ.STUzFHXMuyQNLh85W4hh8lexOm02cr995SYqNULTpOw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZGVlY3p5a2h6ZHF6cHBuZWh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODQyNTM0OSwiZXhwIjoyMDQ0MDAxMzQ5fQ.STUzFHXMuyQNLh85W4hh8lexOm02cr995SYqNULTpOw"
    }
})