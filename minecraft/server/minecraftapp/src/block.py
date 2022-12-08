from mcpi.minecraft import Minecraft

def SetBlock(block):
    mc = Minecraft.create()
    pos = mc.player.getTilePos()
    pos.x = pos.x + block["x"] + 5
    pos.y = pos.y + block["y"]
    pos.z = pos.z + block["z"]
    mc.setBlock(pos.x,pos.y,pos.z,block["type"])

def ApplayMinecraft(json_body):
    print(json_body)
    return 'sub ok'