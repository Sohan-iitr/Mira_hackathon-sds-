### There is error while deploying due to mira cloudfare. Hence complete execution wasnt possible



from mira_sdk import MiraClient, CompoundFlow
from mira_sdk.exceptions import FlowError

flow = CompoundFlow(source=r"D:\\Codeforces\\xyz.yaml")  # Use raw string

try:
    client.flow.deploy(flow)                               # Deploy to platform
    print("Compound flow deployed successfully!")          # Success message
except FlowError as e:
    print(f"Deployment error: {str(e)}")                   # Handle deployment error
