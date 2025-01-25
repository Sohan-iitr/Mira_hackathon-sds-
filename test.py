from mira_sdk import MiraClient, CompoundFlow
from mira_sdk.exceptions import FlowError

client = MiraClient(config={"API_KEY": "sb-a76118f16ca117b5efea6a9a51f8fb93"})     # Initialize Mira Client
flow = CompoundFlow(source=r"D:\\Codeforces\\xyz.yaml")           # Load flow configuration

test_input = {                                              # Prepare test inputs
    "prime_input_1": "thriller",
    "prime_input_2": "2"
}

try:
    response = client.flow.test(flow, test_input)           # Test entire pipeline
    print("Test response:", response)
except FlowError as e:
    print("Test failed:", str(e))                           # Handle test failure
