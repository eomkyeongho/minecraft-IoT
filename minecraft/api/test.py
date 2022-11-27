from mcpi.minecraft import Minecraft
import time

mc = Minecraft.create()
pos = mc.player.getTilePos()
pos.x = pos.x + 5
mc.setBlock(pos.x,pos.y,pos.z,155)


