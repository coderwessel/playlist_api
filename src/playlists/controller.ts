// src/playlists/controller.ts
import { JsonController, Get, Param, Put, Patch, Delete, Body, NotFoundError, HttpCode, Post} from 'routing-controllers'
import Playlist from './entity';

@JsonController()
export default class PlaylistController {


    // part of src/playlists/controller.ts

    @Get('/playlists/:id')
    async getPlaylist(
    @Param('id') id: number
    ) {
        const thisplaylist = await Playlist.findOne(id)
        return { playlist: thisplaylist }
    }

    @Get('/playlists')
    async allPlaylists() {
    const playlists = await Playlist.find()
    return { playlists }
    }

    @Put('/playlists/:id')
    async updatePlaylist(
    @Param('id') id: number,
    @Body() update: Partial<Playlist>
    ) {
    const playlist = await Playlist.findOne(id)
    if (!playlist) throw new NotFoundError('Cannot find playlist')
    const thisplaylist = await Playlist.merge(playlist, update).save()
    return {playlist: thisplaylist}
    }

    @Patch('/playlists/:id')
    async patchPlaylist(
    @Param('id') id: number,
    @Body() update: Partial<Playlist>
    ) {
    const playlist = await Playlist.findOne(id)
    if (!playlist) throw new NotFoundError('Cannot find playlist')

    return Playlist.merge(playlist, update).save()
    }

    @Post('/playlists')
    @HttpCode(201)
    createPlaylist(
    @Body() playlist: Playlist
    ) {
    return playlist.save()
    }

    @Delete('/playlists/:id')
    @HttpCode(204)
    async deletePlaylist(
    @Param('id') id: number,
    ) {
        const playlist = await Playlist.delete(id)
        return playlist
    }


}