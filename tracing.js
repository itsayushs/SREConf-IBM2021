const { NodeTracerProvider } = require('@opentelemetry/node');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/tracing');

const provider = new NodeTracerProvider();
const consoleExporter = new ConsoleSpanExporter();
const spanProcessor = new SimpleSpanProcessor(consoleExporter);
provider.addSpanProcessor(spanProcessor);
provider.register()


const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");

const zipkinExporter = new ZipkinExporter({
  url: 'http://localhost:9411/api/v2/spans',
  serviceName: 'sre-conf-demo1'
})

const zipkinProcessor = new SimpleSpanProcessor(zipkinExporter)
provider.addSpanProcessor(zipkinProcessor)

const { JaegerExporter } = require("@opentelemetry/exporter-jaeger");
const { BatchSpanProcessor } = require("@opentelemetry/tracing");

provider.addSpanProcessor(new BatchSpanProcessor(new JaegerExporter()))