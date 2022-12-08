import json
from django.shortcuts import render, HttpResponse
from minecraftapp.src.block import *

# Create your views here.

def block(request):
    block = json.loads(request.body.decode('utf-8'))
    SetBlock(block)
    return HttpResponse("set block ({}, {}, {})".format(block["x"], block["y"], block["z"]))

def sub(request):
    json_body = json.loads(request.body.decode('utf-8'))
    result = ApplayMinecraft(json_body)
    return HttpResponse(result)