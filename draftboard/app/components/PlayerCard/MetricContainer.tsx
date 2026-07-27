interface MetricProps {
  stats?: string; // optional for now
  number?: number;
}

export default function MetricContainer() {
  return (
    <div>
      <div className="outline-2 outline-offset-2 outline-solid rounded-lg">
        <h4 className="font-bold">26.4</h4>
        <h4>PPG</h4>
      </div>
    </div>
  );
}
