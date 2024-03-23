import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = Array.from({ length: 10 }, (_, i) => ({
  day: `03/${i + 15}`,
  total: Math.floor(Math.random() * 10),
}));

export function Activity() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <XAxis
          dataKey="day"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tick={{ dy: 25 }}
        />
        <YAxis
          domain={[0, 20]}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tick={{ dx: -25 }}
        />
        <Line
          type={'linear'}
          dataKey="total"
          stroke="currentColor"
          strokeWidth={2}
          dot={{ fill: 'currentColor', r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}