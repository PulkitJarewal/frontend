# import the necessary libraries
import torch
from transformers import BertTokenizer, BertForSequenceClassification

# load the pre-trained BERT model and tokenizer
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# define the input text and convert it to input features
text = "This is a positive review."
input_ids = torch.tensor(tokenizer.encode(text)).unsqueeze(0)  # batch size 1

# make the prediction
output = model(input_ids)
prediction = output[0].argmax().item()

# print the prediction
print(f'Prediction: {prediction}')