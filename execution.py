from mira_sdk import MiraClient
from mira_sdk.exceptions import FlowError

flow_name = "your-username/your-flow-name"                 # Flow identifier
input_data = {                                             # Execution inputs
    "prime_input_1": "genre",
    "prime_input_2": "time in minutes"
}

try:
    result = client.flow.execute(flow_name, input_data)    # Execute workflow
    print("Execution result:", result)                     # Display result
except FlowError as e:
    print("Execution error:", str(e))                      # Handle execution error
